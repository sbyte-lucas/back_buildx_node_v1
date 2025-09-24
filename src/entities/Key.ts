import { Entity, OneToMany, PrimaryKey, Property, Collection} from "@mikro-orm/core";
import { KeysFromTo } from "@/entities/KeysFromTo";

@Entity({ tableName: 'bx_chaves' })
export class Key {
    @PrimaryKey({ type: 'integer', autoincrement: true })
    id!: number;

    @Property({ length: 20, unique: true})
    codigo!: string;

    @Property({ length: 60 })
    descricao!: string;

    @OneToMany(() => KeysFromTo, c => c.codigo_id)
    keysFromTo = new Collection<KeysFromTo>(this);
}