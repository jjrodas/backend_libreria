import { ApiProperty } from "@nestjs/swagger";
import { OrdenEntity } from "src/orden/entities/orden.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('libros')
export class LibroEntity {
    @PrimaryGeneratedColumn({ name: 'id_libro' })
    id: number;

    @ApiProperty()
    @Column({ length: 60 })
    titulo: string;

    @ApiProperty()
    @Column({ length: 50 })
    autor: string;

    @ApiProperty()
    @Column({ name: 'fecha_publicacion', type: 'date' })
    fechaPublicacion: Date;

    @ApiProperty()
    @Column({ length: 30 })
    editorial: string;

    @ApiProperty()
    @Column({ length: 15 })
    idioma: string;

    // @ApiProperty()
    // @Column({ name: 'tamaño_archivo' })
    // tamañoArchivo: string;

    @ApiProperty()
    @Column()
    isbn: string;

    @ApiProperty()
    @Column({ name: 'url_imagen' })
    url: string;

    @ApiProperty()
    @Column({ name: 'numero_paginas' })
    numeroPaginas: number;

    @ApiProperty()
    @Column()
    precio: number;

    @ApiProperty()
    @Column({ length: 15 })
    stock: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @OneToMany(() => OrdenEntity, (orden) => orden.libro)
    ordenes: OrdenEntity[];
}
