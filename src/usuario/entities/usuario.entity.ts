import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class UsuarioEntity {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    id: number;

    @Column()
    nombre: string;

    @Column()
    clave: string;
}
