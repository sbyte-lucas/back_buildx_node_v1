import { Migration } from '@mikro-orm/migrations';

export class Migration20250925205150 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table \`bx_erp_item\` change \`loteEconomi\` \`lote_economi\` int null;`);
    this.addSql(`alter table \`bx_erp_item\` change \`codigoCompl\` \`codigo_compl\` varchar(31) null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`bx_erp_item\` change \`lote_economi\` \`loteEconomi\` int null;`);
    this.addSql(`alter table \`bx_erp_item\` change \`codigo_compl\` \`codigoCompl\` varchar(31) null;`);
  }

}
