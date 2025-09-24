import { DateTimeType, DateType, Entity, PrimaryKey, Property, TinyIntType } from "@mikro-orm/core";

@Entity({ tableName: 'authentication_profileuser' }) 
export class User {
    @PrimaryKey({ type: 'integer', autoincrement: true })
    id!: number;

    @Property({ length: 255 })
    password!: string

    @Property({ type: TinyIntType, defaultRaw: '0' })
    is_superuser!: number;

    @Property({ unique: true, length: 150 })
    username!: string;

    @Property({ length: 150 })
    first_name!: string;
    
    @Property({ length: 150 })
    last_name!: string;
    
    @Property({ length: 150 })
    email!: string;

    @Property({ type: TinyIntType, defaultRaw: '0' })
    is_staff!: number;

    @Property({ type: TinyIntType, defaultRaw: '0' })
    is_active!: number;

    @Property({ type: DateTimeType, length: 6}  )
    date_joined!: Date;
    
    @Property({ length: 100 })
    profile_pic!: string;
    
    @Property({ length: 16 })
    role!: string;
    
    @Property({ type: DateType })
    birth_date!: Date;
    
    @Property({ length: 12 })
    mobile_phone!: string;

    // nao e usado na tabela address_address nao tem 1 resgistro
    // @OneToOne({type: BigIntType, nullable: true, })
    // address_id!: number;
}

type TUser = {
    id: number;
    password: string;
    last_login: string;
    is_superuser: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: number;
    is_active: number;
    date_joined: Date;
    pofile_pic: string;
    role: string;
    birth_date: Date;
    mobile_phone: string;
    // address_id: number;
}

export { TUser }