import { Migration } from '@mikro-orm/migrations';

export class Migration20250925200954 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`bx_tens_etapas\` (\`chave_composta\` int unsigned not null auto_increment primary key, \`projeto\` varchar(31) not null, \`it_codigo_id\` varchar(32) not null, \`etapa\` varchar(15) not null, \`fase\` varchar(15) not null, \`qtd_marcas\` int not null, \`revisao\` int not null, \`confirmado\` tinyint not null) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`bx_tens_etapas\` add unique \`bx_itens_etapas_keys\`(\`projeto\`, \`fase\`, \`etapa\`, \`it_codigo_id\`, \`revisao\`);`);
  }

}
