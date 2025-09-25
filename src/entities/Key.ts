import { Entity, OneToMany, PrimaryKey, Property, Collection} from "@mikro-orm/core";
import { KeysFromTo } from "@/entities/KeysFromTo";

@Entity({ tableName: 'bx_chaves' })
export class Key {
    @PrimaryKey({ type: 'integer', autoincrement: true })
    id!: number;

    @Property({type: 'string',  length: 20, unique: true})
    codigo!: string;

    @Property({ length: 60 })
    descricao!: string;

    keysFromTo = new Collection<KeysFromTo>(this);
}