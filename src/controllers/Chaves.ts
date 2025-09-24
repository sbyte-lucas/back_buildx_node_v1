import { Key } from "@/entities/Key";

export default class Chaves {
    static async get(req: request, res: response): Promise<void> {
        const chaves = await global.em.find(Key, {}, { fields: ['id', 'codigo'] })
        
        res.status(200).json({ bx_chaves: chaves })
        return
    }

    static async retrieve(req: request, res: response): Promise<void> {
        // aqui deveria ser pelo id das tabelas e nao string , express lida com regex mal   
        const { codigo } = req.params 
        const chave = await global.em.findOneOrFail(Key, { codigo: codigo }, { populate: ['keysFromTo'] })

        const resChave = {
            codigo: chave?.codigo,
            bx_chaves_de_para: chave?.keysFromTo.map(key => {
                return {
                    de_para_1: key.de_para_1,
                    de_para_2: key.de_para_2
                }
            })
        }
        res.status(200).json({ bx_chave: resChave, sucess: true })
        return
    }
}