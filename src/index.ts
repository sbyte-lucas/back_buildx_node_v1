import "reflect-metadata";
import "dotenv/config"
import express, { Application } from "express";
import cors from "cors";
import router from "@/router";

import { initORM, ormMiddleware } from "./databases/mikro";
import '@/global/types'

const PORT = process.env.PORT

const main = async () => {
    try {
        // Cria app Express e os middlewares essenciais
        const app: Application = express();
        app.use(cors())
        app.use(express.json());
        app.use(express.static('static')); //servir arquivos

        // Inicializa ORM
        await initORM();

        // Usa middleware do MikroORM para contexto por request
        app.use(ormMiddleware);

        // Usa as rotas
        app.use(router);

        // Sobe servidor
        app.listen(PORT, () => {
            console.log(`✅ Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ Erro ao iniciar servidor:", err);
        process.exit(1);
    }
};

main();
