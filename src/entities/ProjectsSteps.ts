import { Entity, PrimaryKey, Property, TinyIntType, Unique } from "@mikro-orm/core";

@Entity({ tableName: "bx_projetos_etapas" })
@Unique({ name: "bx_projetos_etapas_projeto_etapa_fase_revisao", properties: ["projeto", "etapa", "fase", "revisao"] })
export class ProjectsSteps {

  @PrimaryKey({ type: 'integer', autoincrement: true })
  chave_composta!: number;

  @Property({ length: 31 })
  projeto!: string;

  @Property({ length: 50, nullable: true, default: null })
  cliente!: string;

  @Property({ length: 15, nullable: true, default: null })
  fase!: string;

  @Property({ length: 15 })
  etapa!: string;

  @Property({ type: TinyIntType, length: 1 })
  fim!: number;

  @Property({ type: 'integer' })
  revisao!: number ;

  @Property({ type: TinyIntType, length: 1 })
  confirmado!: number;
}