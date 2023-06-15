import { ApiProperty } from "@nestjs/swagger";
import { OrdenEntity } from "src/orden/entities/orden.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @OneToMany(() => OrdenEntity, (orden) => orden.cliente)
    ordenes: OrdenEntity[];
}
