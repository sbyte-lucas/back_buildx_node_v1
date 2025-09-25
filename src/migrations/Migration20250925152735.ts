import { Migration } from '@mikro-orm/migrations';

export class Migration20250925152735 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`bx_chaves\` (\`id\` int unsigned not null auto_increment primary key, \`codigo\` varchar(20) not null, \`descricao\` varchar(60) not null) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`bx_chaves\` add unique \`bx_chaves_codigo_unique\`(\`codigo\`);`);

    this.addSql(`create table \`bx_chaves_de_para\` (\`id\` bigint unsigned not null auto_increment primary key, \`de_para_1\` varchar(30) not null, \`de_para_2\` varchar(120) null, \`codigo_id\` varchar(255) not null) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`bx_chaves_de_para\` add unique \`bx_chaves_de_para_keys\`(\`codigo_id\`, \`de_para_1\`);`);

    this.addSql(`create table \`authentication_profileuser\` (\`id\` int unsigned not null auto_increment primary key, \`password\` varchar(255) not null, \`is_superuser\` tinyint not null default 0, \`username\` varchar(150) not null, \`first_name\` varchar(150) not null, \`last_name\` varchar(150) not null, \`email\` varchar(150) not null, \`is_staff\` tinyint not null default 0, \`is_active\` tinyint not null default 0, \`date_joined\` datetime(6) not null, \`profile_pic\` varchar(100) not null, \`role\` varchar(16) not null, \`birth_date\` date not null, \`mobile_phone\` varchar(12) not null) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`authentication_profileuser\` add unique \`authentication_profileuser_username_unique\`(\`username\`);`);

    this.addSql(`create table \`authentication_tokens\` (\`id\` int unsigned not null auto_increment primary key, \`token\` varchar(255) not null, \`user_id\` int unsigned not null, \`created_at\` datetime not null) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`authentication_tokens\` add unique \`authentication_tokens_user_id_unique\`(\`user_id\`);`);

    this.addSql(`alter table \`authentication_tokens\` add constraint \`authentication_tokens_user_id_foreign\` foreign key (\`user_id\`) references \`authentication_profileuser\` (\`id\`) on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`authentication_tokens\` drop foreign key \`authentication_tokens_user_id_foreign\`;`);

    this.addSql(`drop table if exists \`bx_chaves\`;`);

    this.addSql(`drop table if exists \`bx_chaves_de_para\`;`);

    this.addSql(`drop table if exists \`authentication_profileuser\`;`);

    this.addSql(`drop table if exists \`authentication_tokens\`;`);
  }

}
