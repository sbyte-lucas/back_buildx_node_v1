import { Entity, PrimaryKey, Property, ManyToOne, Unique } from "@mikro-orm/core";
//import { Key } from "./Key";

@Entity({ tableName: "bx_chaves_de_para" })
@Unique({ name: "bx_chaves_de_para_keys", properties: ["codigo_id", "de_para_1"] })
export class KeysFromTo {
    @PrimaryKey({ type: "bigint", autoincrement: true })
    id!: number;

    @Property({ length: 30 })
    de_para_1!: string;

    @Property({ length: 120, nullable: true })
    de_para_2?: string;

    @Property()
    codigo_id!: string;
}
