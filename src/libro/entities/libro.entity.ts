import { OrdenEntity } from "src/orden/entities/orden.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('libros')
export class LibroEntity {
    @PrimaryGeneratedColumn({ name: 'id_libro' })
    id: number;

    @Column({ length: 60 })
    titulo: string;

    @Column({ length: 50 })
    autor: string;

    @Column({ name: 'fecha_publicacion', type: 'date' })
    fechaPublicacion: Date;

    @Column({ length: 30 })
    editorial: string;

    @Column({ length: 15 })
    idioma: string;

    @Column({ name: 'tamaño_archivo' })
    tamañoArchivo: string;

    @Column({ name: 'numero_paginas' })
    numeroPaginas: number;

    @Column()
    precio: number;

    @Column({ length: 15 })
    stock: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @OneToMany(() => OrdenEntity, (orden) => orden.libro)
    ordenes: OrdenEntity[];
}
