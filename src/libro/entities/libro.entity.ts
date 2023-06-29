import { ApiProperty } from "@nestjs/swagger";
import { OrdenEntity } from "src/orden/entities/orden.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('libros')
export class LibroEntity {
    @PrimaryGeneratedColumn({ name: 'id_libro' })
    id: number;

    @ApiProperty()
    @Column()
    titulo: string;

    @ApiProperty()
    @Column()
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

    @ApiProperty()
    @Column({ length: 30 })
    isbn: string;

    @ApiProperty()
    @Column({ name: 'url_imagen', length: 500 })
    url: string;

    @ApiProperty()
    @Column({ name: 'numero_paginas' })
    numeroPaginas: number;

    @ApiProperty()
    @Column()
    precio: number;

    @ApiProperty()
    @Column()
    stock: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @OneToMany(() => OrdenEntity, (orden) => orden.libro)
    ordenes: OrdenEntity[];
}
