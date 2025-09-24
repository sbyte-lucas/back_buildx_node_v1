import { MikroORM, RequestContext } from '@mikro-orm/core';
import { MySqlDriver } from '@mikro-orm/mysql';
import { RequestHandler } from 'express';

// Variavel de instancia 
let orm: MikroORM<MySqlDriver>;
const {
  MYSQL_NAME,
  MYSQL_USER,
  MYSQL_PASSWORD, 
  MYSQL_HOST, 
  MYSQL_PORT
} = process.env

// Objeto sem tipo para config 
const ormConfig = {
    entities: ['./dist/entities'], // path for built JS files
    entitiesTs: ['./src/entities'], // path for TS files in dev mode
    dbName: MYSQL_NAME,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    host: MYSQL_HOST,
    port: Number(MYSQL_PORT),
    driver: MySqlDriver, //isso aqui e importante 
};

/**
 * Funcao para iniciar o mikro de modo assincrono 
 * Chamada deve ser feita apenas uma vez no index
 */
export async function initORM() {
    try {
        orm = await MikroORM.init(ormConfig);
        console.log('MikroORM connection successful.');
    } catch (error) {
        console.error('MikroORM connection failed.', error);
        // Kills process, as the app cannot run without database.
        process.exit(1);
    }
}

/** peguei do stacker overflow
 * A middleware for Express that creates a request-specific context.
 * This is the crucial part for preventing requests from interfering with each other.
 */
export const ormMiddleware: RequestHandler = (req:request, res:response, next) => {
    console.log("Called:",req.path, "with:",req.method)
    // The RequestContext helper creates a new EntityManager fork for each request.
    // This is the correct way to handle request isolation.
    RequestContext.create(orm.em, () => {
        // Atribui o EM forkado à variável global
        global.em = orm.em;
        next();
    });
};