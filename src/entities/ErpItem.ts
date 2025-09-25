import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';

@Entity({ tableName: 'bx_erp_item' })
@Unique({ properties: ['it_codigo', 'revisao'] })
export class BxErpItem {
  @PrimaryKey({ length: 32 })
  chave_composta!: string;

  @Property({ length: 40 })
  it_codigo!: string;

  @Property({ length: 5, nullable: true })
  un?: string;

  @Property({ nullable: true })
  compr_fabric?: number;

  @Property({ nullable: true })
  ge_codigo?: number;

  @Property({ length: 20, nullable: true })
  fm_codigo?: string;

  @Property({ length: 12 })
  data_implant!: string;

  @Property({ length: 20, nullable: true })
  fm_cod_com?: string;

  @Property({ length: 20, nullable: true })
  cd_folh_item?: string;

  @Property({ length: 122, nullable: true })
  desc_item?: string;

  @Property({ length: 255, nullable: true })
  narrativa?: string;

  @Property({ length: 20, nullable: true })
  inform_compl?: string;

  @Property({ type: 'boolean' })
  atualizado_erp!: boolean;

  @Property({ type: 'boolean' })
  atualizado_estrutura!: boolean;

  @Property({ type: 'boolean' })
  atualizado_mp!: boolean;

  @Property({ type: 'boolean' })
  atualizado_ordens!: boolean;

  @Property({ type: 'boolean' })
  atualizado_roteiro!: boolean;

  @Property({ nullable: true })
  cod_plano_corte?: number;

  @Property({ nullable: true })
  origem?: number;

  @Property({ type: 'boolean' })
  plano_corte!: boolean;

  @Property({ length: 15, nullable: true })
  fase?: string;

  @Property({ length: 31 })
  projeto!: string;

  @Property({ type: 'boolean', nullable: true })
  peca_unica?: boolean;

  @Property({ length: 1, nullable: true })
  tipo_peca?: string;

  @Property({ type: 'double' })
  peso_peca!: number;

  @Property()
  status_erp!: number;

  @Property({ length: 200 })
  mensagem_erp!: string;

  @Property({ type: 'boolean' })
  montado!: boolean;

  @Property({ type: 'boolean' })
  atualizado_rede_pert!: boolean;

  @Property({ nullable: true })
  loteEconomi?: number;

  @Property({ length: 31, nullable: true })
  codigoCompl?: string;

  @Property()
  divergente!: number;

  @Property()
  motivo_divergencia!: number;

  @Property()
  review_erp!: number;

  @Property()
  revisao!: number;

  @Property({ length: 40, nullable: true })
  inform_compl_pm?: string;
}