import { Entity, PrimaryKey, Property, OneToOne, Unique, TinyIntType } from "@mikro-orm/core";

@Entity({ tableName: 'bx_itens_etapas' })
@Unique({ 
  name: 'bx_itens_etapas_keys', 
  properties: [`projeto`, `fase`, `etapa`, `it_codigo_id`, `revisao`] 
})
export class ItensSteps {
  @PrimaryKey({ type: 'integer', autoincrement: true })
  chave_composta!: number;

  @Property({length: 31, index:true})
  projeto!: string;

  // @OneToOne(ErpItem, () => chave_composta)
  @Property({length: 32, index:true })
  it_codigo_id!: string;

  @Property({length: 15, index:true})
  etapa!: string;

  @Property({length: 15, index:true})
  fase!: string;

  @Property({type: "integer"})
  qtd_marcas!: number;

  @Property({type: "integer", index:true})
  revisao!: number;

  @Property({type: TinyIntType, length: 1 })
  confirmado!: string;
}