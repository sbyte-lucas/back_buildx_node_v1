import { ProjectsSteps } from "@/entities/ProjectsSteps";
import { ItensSteps } from "@/entities/ItensSteps"

type queryType = {
  projeto: string
  etapa: string
  fase: string
  revisao: string
  qtd_marcas: string
}

export default class EtapasProjetos {
  //lista pecas
  static async get(req: request, res: response): Promise<void> {
    const { projeto, etapa, fase, revisao, qtd_marcas } = req.query as queryType;
    const qtdMarcasInt = parseInt(qtd_marcas);
    const filtrados: ProjectsSteps[] = [];

    if (!qtdMarcasInt || qtdMarcasInt <= 0) {
      res.status(200).json({
        sucess: true,
        bx_projetos_etapas: [],
        message: "Quantidade de marcas incorreta"
      })
      return
    }

    try {
      // Repositórios copia dos repositórios
      const projectsStepsRepo = global.em.getRepository(ProjectsSteps);
      const itensEtapasRepo = global.em.getRepository(ItensSteps);

      // Construir filtros - verificando se vieram do front
      const filters: any = {};
      if (projeto) filters.projeto = projeto;
      if (fase) filters.fase = fase;
      if (etapa) filters.etapa = etapa;
      if (revisao) filters.revisao = parseInt(revisao)

      const etapasProjeto = await projectsStepsRepo.findAll({
        where: filters
      });

      // Acho a quantidade de marcas por etapa encontrada
      for (const obj of etapasProjeto) {
        const count = await itensEtapasRepo.count({
          projeto: obj.projeto,
          fase: obj.fase,
          etapa: obj.etapa,
          revisao: obj.revisao
        })

        if (count >= qtdMarcasInt) {
          filtrados.push({ ...obj, qtd_marcas: count });
        }
      }
      // Como tem que comparar para o sort ordenar corretamente
      let result: ProjectsSteps[] = filtrados.sort((a, b) => {
        return a.projeto.localeCompare(b.projeto) ||
          a.fase.localeCompare(b.fase) ||
          a.etapa.localeCompare(b.etapa) ||
          (a.revisao - b.revisao);
      })

      result.length > 0 ?
        res.json({ success: true, bx_projetos_etapas: result })
        : res.status(404).json({ success: false, message: "Bx Projeto Etapa não encontrada" })
      return
    } catch (error) {
      res.status(500).json({ success: false, message: "Erro interno do servidor" });
      return
    }
  }
}
