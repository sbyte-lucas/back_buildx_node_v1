import { Key } from "@/entities/Key";
import { KeysFromTo } from "@/entities/KeysFromTo";

export default class ChavesDePara {
  static async insert(req: request, res: response): Promise<void> {
    const { de_para_1, de_para_2, codigo } = req.body

    const newKeyFromTo = await global.em.create(KeysFromTo,
      {
        de_para_1: de_para_1,
        de_para_2: de_para_2,
        codigo_id: codigo,
      }
    )

    await global.em.persistAndFlush(newKeyFromTo);

    res.status(201).json({ success: true })
    return
  }

  static async update(req: request, res: response): Promise<void> {
    const { de_para_id, de_para_1, de_para_2 } = req.body
    console.log(req.body)

    const keyFromTo = await global.em.findOneOrFail(KeysFromTo,
      { id: de_para_id, de_para_1: de_para_1 }
    )
    keyFromTo.de_para_2 = de_para_2

    await global.em.persistAndFlush(keyFromTo);
    res.status(200).json({ success: true })
    return
  }

  static async delete(req: request, res: response): Promise<void> {
    const { chaveDeParaId } = req.params
    const refKeyFromTo = await global.em.getReference(KeysFromTo, Number(chaveDeParaId))

    global.em.remove(refKeyFromTo)

    await global.em.flush()

    res.status(204).json({ success: true })
    return
  }
}