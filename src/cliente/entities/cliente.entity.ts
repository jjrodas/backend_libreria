import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class ClienteEntity {
    @PrimaryGeneratedColumn({ name: 'id_cliente' })
    id: number;

    @ApiProperty()
    @Column({ length: 50, name: 'nombre_completo' })
    nombre: string;

    @ApiProperty()
    @Column({ length: 40 })
    email: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @CreateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
}
