import * as bcrypt from 'bcrypt';
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class UsuarioEntity {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    id: number;

    @Column({ length: 20 })
    nombre: string;

    @Column({ select: false })
    clave: string;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        const salt = await bcrypt.genSalt();
        this.clave = await bcrypt.hash(this.clave, salt);
    }

    async validatePassword(plainPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, this.clave);
    }
}
