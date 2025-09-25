import { Migration } from '@mikro-orm/migrations';

export class Migration20250925204222 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`bx_erp_item\` (\`chave_composta\` varchar(32) not null, \`it_codigo\` varchar(40) not null, \`un\` varchar(5) null, \`compr_fabric\` int null, \`ge_codigo\` int null, \`fm_codigo\` varchar(20) null, \`data_implant\` varchar(12) not null, \`fm_cod_com\` varchar(20) null, \`cd_folh_item\` varchar(20) null, \`desc_item\` varchar(122) null, \`narrativa\` varchar(255) null, \`inform_compl\` varchar(20) null, \`atualizado_erp\` tinyint(1) not null, \`atualizado_estrutura\` tinyint(1) not null, \`atualizado_mp\` tinyint(1) not null, \`atualizado_ordens\` tinyint(1) not null, \`atualizado_roteiro\` tinyint(1) not null, \`cod_plano_corte\` int null, \`origem\` int null, \`plano_corte\` tinyint(1) not null, \`fase\` varchar(15) null, \`projeto\` varchar(31) not null, \`peca_unica\` tinyint(1) null, \`tipo_peca\` varchar(1) null, \`peso_peca\` double not null, \`status_erp\` int not null, \`mensagem_erp\` varchar(200) not null, \`montado\` tinyint(1) not null, \`atualizado_rede_pert\` tinyint(1) not null, \`lote_economi\` int null, \`codigo_compl\` varchar(31) null, \`divergente\` int not null, \`motivo_divergencia\` int not null, \`review_erp\` int not null, \`revisao\` int not null, \`inform_compl_pm\` varchar(40) null, primary key (\`chave_composta\`)) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`bx_erp_item\` add unique \`bx_erp_item_it_codigo_revisao_unique\`(\`it_codigo\`, \`revisao\`);`);
  }

}
