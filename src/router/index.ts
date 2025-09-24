import { Router } from "express";
const router = Router()

/* -----import controllers----- */

import Chaves from '@/controllers/Chaves'
import Authentication from "@/controllers/Authentication";
/* -------- */

// Atribui Rotas(paths) aos Controllers
const routes: Route[] = [
    //Authentication
    { method: 'post', path: '/auth/login', handler: Authentication.login },

    //Chaves
    { method: 'get', path: '/bx/chaves', handler: Chaves.get},
    { method: 'get', path: '/bx/chaves/:codigo', handler: Chaves.retrieve}
]

for (const route of routes) {
    router[route.method](`/api${route.path}`, route.handler)
}

export default router