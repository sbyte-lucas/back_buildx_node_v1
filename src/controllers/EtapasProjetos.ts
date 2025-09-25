import { ProjectsSteps } from "@/entities/ProjectsSteps";
import { ItensSteps } from "@/entities/ItensSteps"

export default class EtapasProjetos {
  static async get(req: request, res: response): Promise<void> {
    const { projeto, etapa, fase, revisao, qtd_marcas } = req.query;

    try {
      // Repository do MikroORM
      const projectsStepsRepo = global.em.getRepository(ProjectsSteps);
      const itensEtapasRepo = global.em.getRepository(ItensSteps);

      // Construir filtros
      const filters: any = {};
      if (projeto) filters.projeto = projeto;
      if (fase) filters.fase = fase;
      if (etapa) filters.etapa = etapa;
      if (revisao) {
        try {
          filters.revisao = parseInt(revisao as string);
        } catch { }
      }

      let result: ProjectsSteps[];
      // console.log(qtd_marcas)
      const qtdMarcasInt = parseInt(qtd_marcas as string);
      if (qtdMarcasInt >= 1) {
        console.log('if')
        const iniciais = await projectsStepsRepo.findAll({
          where: filters
        });

        const filtrados: ProjectsSteps[] = [];

        for (const obj of iniciais) {
          const count = await itensEtapasRepo.count({
            projeto: obj.projeto,
            fase: obj.fase,
            etapa: obj.etapa,
            revisao: obj.revisao
          });

          if (count >= qtdMarcasInt) {
            filtrados.push(obj);
          }
        }

        result = filtrados.sort((a, b) => {
          return a.projeto.localeCompare(b.projeto) ||
            a.fase.localeCompare(b.fase) ||
            a.etapa.localeCompare(b.etapa) ||
            (a.revisao - b.revisao);
        });
        console.log(result, 'final')

      } else {
        result = await projectsStepsRepo.findAll({
          where: filters,
          orderBy: { projeto: 'ASC', fase: 'ASC', etapa: 'ASC', revisao: 'ASC' }
        });
      }

      if (result.length > 0) {
        res.json({
          success: true,
          bx_projetos_etapas: result
        });
        return
      } else {
        res.status(404).json({
          success: false,
          message: "Bx Projeto Etapa não encontrada"
        });
        return
      }

    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro interno do servidor",
      });
      return
    }
  }
}
