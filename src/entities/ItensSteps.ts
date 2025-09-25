import { Entity, PrimaryKey, Property, OneToOne, Unique, TinyIntType } from "@mikro-orm/core";

@Entity({ tableName: 'bx_itens_etapas' })
@Unique({ 
  name: 'bx_itens_etapas_keys', 
  properties: [`projeto`, `fase`, `etapa`, `it_codigo_id`, `revisao`] 
})
export class ItensSteps {
  @PrimaryKey({ type: 'integer', autoincrement: true })
  chave_composta!: number;

  @Property({length: 31})
  projeto!: string;

  // @OneToOne(ErpItem, () => chave_composta)
  @Property({length: 32 })
  it_codigo_id!: string;

  @Property({length: 15})
  etapa!: string;

  @Property({length: 15})
  fase!: string;

  @Property({type: "integer"})
  qtd_marcas!: number;

  @Property({type: "integer"})
  revisao!: number;

  @Property({type: TinyIntType, length: 1 })
  confirmado!: string;
}