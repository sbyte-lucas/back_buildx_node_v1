import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Key } from "@/entities/Key";

@Entity({ tableName: 'bx_chaves_de_para' })
export class KeysFromTo {
    @PrimaryKey({ type: 'integer', autoincrement: true })
    id!: number;

    @Property({ length: 30, nullable: false })
    de_para_1!: string;

    @Property({ length: 120 })
    de_para_2!: string;

    @ManyToOne(() => Key, {
        fieldName: 'codigo_id',
        type: 'string',
        ref: true
    })
    codigo_id!: Key;
}