import { Key } from "@/entities/Key";
import { KeysFromTo } from "@/entities/KeysFromTo";

export default class Chaves {
    static async get(req: request, res: response): Promise<void> {
        const chaves = await global.em.find(Key, {}, { fields: ['id', 'codigo'] })

        res.status(200).json({ bx_chaves: chaves })
        return
    }

    static async retrieve(req: request, res: response): Promise<void> {
        // aqui deveria ser pelo id das tabelas e nao string , express lida com regex mal   
        const { codigo } = req.params
        const chave = await global.em.findOneOrFail(Key, { codigo: codigo })
        const list = await global.em.find(KeysFromTo, { codigo_id: chave.codigo })

        const resChave = {
            codigo: chave?.codigo,
            bx_chaves_de_para: list.map(key => {
                return {
                    id_de_para: key.id, 
                    de_para_1: key.de_para_1,
                    de_para_2: key.de_para_2
                }
            })
        }
        res.status(200).json({ bx_chave: resChave, sucess: true })
        return
    }

    static async insert(req: request, res: response): Promise<void> {
        const key = await global.em.create(Key,
            {
                codigo: req.body.codigo,
                descricao: req.body.descricao
            }
        )

        await global.em.persistAndFlush(key);
        res.status(201).json({ sucess: true })
        return
    }

    static async update(req: request, res: response): Promise<void> {
        const { codigo } = req.params
        await global.em.nativeUpdate(Key, { codigo: codigo }, {
            codigo: req.body.codigo,
            descricao: req.body.descricao
        });

        res.status(201).json({ sucess: true })
        return
    }
}