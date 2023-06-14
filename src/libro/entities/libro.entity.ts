import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity('libros')
export class LibroEntity {
    @PrimaryColumn({ name: 'id_libro' })
    id: number;

    @ApiProperty()
    @Column()
    titulo: string;

    @ApiProperty()
    @Column()
    autor: string;

    //@ApiProperty()
    @Column({ name: 'fecha_publicacion' })
    fechaPublicacion: Date

    @ApiProperty()
    @Column()
    editorial: string;

    @ApiProperty()
    @Column()
    idioma: string;

    @ApiProperty()
    @Column({ name: 'tamaño_archivo' })
    tamañoArchivo: string;

    @ApiProperty()
    @Column({ name: 'numero_paginas' })
    numeroPaginas: number;

    @ApiProperty()
    @Column()
    precio: number;

    @ApiProperty()
    @Column()
    stock: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
}
