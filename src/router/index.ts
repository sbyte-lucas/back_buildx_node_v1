import { Router } from "express";
const router = Router()

/* -----import controllers----- */

import EtapasProjetos from '@/controllers/EtapasProjetos'
import Chaves from '@/controllers/Chaves'
import ChavesDePara from '@/controllers/ChavesDePara'
import Authentication from "@/controllers/Authentication";
/* -------- */

// Atribui Rotas(paths) aos Controllers
const routes: Route[] = [
    //Authentication
    { method: 'post', path: '/auth/login', handler: Authentication.login },

    //Chaves
    { method: 'get', path: '/bx/chaves', handler: Chaves.get},
    { method: 'post', path: '/bx/chaves/', handler: Chaves.insert},
    { method: 'put', path: '/bx/chaves/:codigo', handler: Chaves.update},
    { method: 'get', path: '/bx/chaves/:codigo', handler: Chaves.retrieve},

    //Chaves_de_para
    { method: 'post', path: '/bx/chaves-de-para/', handler: ChavesDePara.insert},
    { method: 'put', path: '/bx/chaves-de-para/single/', handler: ChavesDePara.update},
    { method: 'delete', path: '/bx/chaves-de-para/single/:chaveDeParaId', handler: ChavesDePara.delete},

    //Projetos 
    { method: 'get', path: '/bx/projetos-etapas/', handler: EtapasProjetos.get},
]

for (const route of routes) {
    router[route.method](`/api${route.path}`, route.handler)
}

export default router
