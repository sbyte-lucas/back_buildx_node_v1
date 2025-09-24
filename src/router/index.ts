import { Router } from "express";
const router = Router()

/* -----import controllers----- */


import Authentication from "@/controllers/Authentication";
/* -------- */

// Atribui Rotas(paths) aos Controllers
const routes: Route[] = [
    { method: 'post', path: '/auth/login', handler: Authentication.login },
]

for (const route of routes) {
    router[route.method](`/api${route.path}`, route.handler)
}

export default router