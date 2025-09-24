//esenciais
import express from "express";
import cors from "cors";
import router from "./router";

//global e env
import 'dotenv/config';
import './global/types'; 

import { TokenGenerator } from "@/utils/tokenGenerator";
import { RequestContext } from "@mikro-orm/core";
import { ormMiddleware, initORM } from '@/databases/mikro'
let server;

async function main() {
    //esenciais
    const app = express();
    app.use(cors)
    app.use(express.json());
    app.use(express.static('public'));
    
    //Orm methods
    await initORM
    app.use(ormMiddleware);

    app.use(async (req: request, res: response, next) => {
        console.log(`Request Method: ${req.method}, URL:${req.path}`);

        //   let routesIgnore = [
        //     '/login',
        //   ]

        //   // Check if route should be ignored
        //   if (routesIgnore.some(route => req.path.startsWith(route))) {
        //     next()
        //     return;
        //   }

        //   // --------------------- 
        //   // Verify token for protected routes
        //   const token = req.headers.authorization?.split(' ')[1];

        //   if (token) {
        //     const isValid = await TokenGenerator.verifyToken(token, false);

        //     if (isValid) {
        //       console.log(`Token valid - proceeding to route`);
        //       console.log(`---------------------------------`);
        //       next()
        //       return;
        //     }
        //     console.log(`Token INVALID - rejecting request`);
        //     console.log(`---------------------------------`);
        //     return;
        //   } else {
        //     console.log(`NO TOKEN - rejecting request`);
        //   }

        //   console.log(`=== AUTH REJECTED ===`);
        //   res.status(401).json({ success: false, message: 'Token expired!', logout: true })
        //   return;
    })


    //manter router no final
    app.use(router);
    // Middleware
    server = app.listen(process.env.PORT, () => {
        //never change the port number 
        // cause nginx is configured to listen on this port
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}
main()

module.exports = server