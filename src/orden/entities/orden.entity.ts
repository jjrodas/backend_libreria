import { ClienteEntity } from "src/cliente/entities/cliente.entity";
import { LibroEntity } from "src/libro/entities/libro.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('ordenes')
export class OrdenEntity {
    @PrimaryGeneratedColumn({ name: 'id_orden' })
    id: number;

    @Column({ name: 'id_cliente' })
    idCliente: number;

    @Column({ name: 'id_libro' })
    idLibro: number;

    @Column()
    cantidad: number;

    @Column({ name: 'precio_unitario' })
    precioUnitario: number;

    @Column({ name: 'total_venta' })
    totalVenta: number;

    @Column({ name: 'fecha_emision', type: 'date' })
    fechaEmision: Date;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @ManyToOne(() => ClienteEntity, (cliente) => cliente.ordenes)
    @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
    cliente: ClienteEntity;

    @ManyToOne(() => LibroEntity, (libro) => libro.ordenes)
    @JoinColumn({ name: 'id_libro', referencedColumnName: 'id' })
    libro: LibroEntity;
}
