import { Migration } from '@mikro-orm/migrations';

export class Migration20250926120714 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`bx_itens_etapas\` add index \`bx_itens_etapas_projeto_index\`(\`projeto\`);`);
    this.addSql(`alter table \`bx_itens_etapas\` add index \`bx_itens_etapas_it_codigo_id_index\`(\`it_codigo_id\`);`);
    this.addSql(`alter table \`bx_itens_etapas\` add index \`bx_itens_etapas_etapa_index\`(\`etapa\`);`);
    this.addSql(`alter table \`bx_itens_etapas\` add index \`bx_itens_etapas_fase_index\`(\`fase\`);`);
    this.addSql(`alter table \`bx_itens_etapas\` add index \`bx_itens_etapas_revisao_index\`(\`revisao\`);`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`bx_itens_etapas\` drop index \`bx_itens_etapas_projeto_index\`;`);
    this.addSql(`alter table \`bx_itens_etapas\` drop index \`bx_itens_etapas_it_codigo_id_index\`;`);
    this.addSql(`alter table \`bx_itens_etapas\` drop index \`bx_itens_etapas_etapa_index\`;`);
    this.addSql(`alter table \`bx_itens_etapas\` drop index \`bx_itens_etapas_fase_index\`;`);
    this.addSql(`alter table \`bx_itens_etapas\` drop index \`bx_itens_etapas_revisao_index\`;`);
  }

}
