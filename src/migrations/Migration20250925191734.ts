import { Migration } from '@mikro-orm/migrations';

export class Migration20250925191734 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`bx_projetos_etapas\` (\`chave_composta\` int unsigned not null auto_increment primary key, \`projeto\` varchar(31) not null, \`cliente\` varchar(50) null default null, \`fase\` varchar(15) null default null, \`etapa\` varchar(15) not null, \`fim\` tinyint not null, \`revisao\` int not null, \`confirmado\` tinyint not null) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`bx_projetos_etapas\` add unique \`bx_projetos_etapas_projeto_etapa_fase_revisao\`(\`projeto\`, \`etapa\`, \`fase\`, \`revisao\`);`);
  }

}
