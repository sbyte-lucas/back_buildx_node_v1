import { EntityManager } from '@mikro-orm/core'
import { RequestHandler, Request, Response } from 'express'

declare global {
    var em:EntityManager;
    //   type PermissionInfo = {
    //     isCompany: boolean;
    //     isEmployee: boolean;
    //     companyId: string | null;
    //     permission: number;
    //   }

    //   type TypeTokens = {
    //     userId: string;
    //     isActive: boolean;
    //     permissionInfo: PermissionInfo;
    //   }
    type response = Response
    //type request = Request & { tokenContent?: TypeTokens }
    type request = Request

    interface Route {
        method: 'get' | 'post' | 'put' | 'delete'
        path: string
        handler: RequestHandler
    }
}

export { } 