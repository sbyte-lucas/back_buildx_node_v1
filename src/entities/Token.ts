import { Entity, PrimaryKey, Property, OneToOne, DateTimeType } from "@mikro-orm/core";
import { User } from "@/entities/User";

@Entity({ tableName: 'authentication_tokens' })
export class Token {
    @PrimaryKey({ type: 'integer', autoincrement: true })
    id!: number;

    @Property()
    token!: string;

    @OneToOne(() => User, {
        owner: true, 
        fieldName: `user_id`, 
        type: 'integer',
        ref: true
    })
    user?: User;

    @Property({ type: DateTimeType, onUpdate: () => new Date()})
    created_at!: Date;
}