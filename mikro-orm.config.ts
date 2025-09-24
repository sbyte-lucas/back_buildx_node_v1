import { defineConfig } from '@mikro-orm/mysql';
import 'dotenv/config';

export default defineConfig({
  entities: ['./dist/entities'], // entities aqui
  entitiesTs: ['./src/entities'], // entities aqui
  dbName: process.env.MYSQL_NAME,
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  migrations: {
    path: './dist/migrations', // path to your migrations directory
    pathTs: './src/migrations', // path to typescript migrations
    glob: '!(*.d).{js,ts}', // migration files pattern
  },
});