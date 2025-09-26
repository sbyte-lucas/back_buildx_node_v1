import { Migration } from '@mikro-orm/migrations';

export class Migration20250926120554 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`bx_projetos_etapas\` add index \`bx_projetos_etapas_projeto_index\`(\`projeto\`);`);
    this.addSql(`alter table \`bx_projetos_etapas\` add index \`bx_projetos_etapas_fase_index\`(\`fase\`);`);
    this.addSql(`alter table \`bx_projetos_etapas\` add index \`bx_projetos_etapas_etapa_index\`(\`etapa\`);`);
    this.addSql(`alter table \`bx_projetos_etapas\` add index \`bx_projetos_etapas_revisao_index\`(\`revisao\`);`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`bx_projetos_etapas\` drop index \`bx_projetos_etapas_projeto_index\`;`);
    this.addSql(`alter table \`bx_projetos_etapas\` drop index \`bx_projetos_etapas_fase_index\`;`);
    this.addSql(`alter table \`bx_projetos_etapas\` drop index \`bx_projetos_etapas_etapa_index\`;`);
    this.addSql(`alter table \`bx_projetos_etapas\` drop index \`bx_projetos_etapas_revisao_index\`;`);
  }

}
