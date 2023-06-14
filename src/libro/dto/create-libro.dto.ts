import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateLibroDto {
    @ApiProperty()
    @IsString({ message: 'El campo titulo debe ser de tipo cadena' })
    @IsNotEmpty({ message: 'El campo titulo no debe estar vacío.' })
    @MaxLength(50, { message: 'El campo titulo no debe tener más de 50 caracteres.' })
    readonly titulo: string;

    @ApiProperty()
    @IsString({ message: 'El campo autor debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo autor no debe estar vacío' })
    @MaxLength(40, { message: 'El campo autor no debe tener más de 40 caracteres.' })
    readonly autor: string;

    readonly fechaPublicacion: Date;

    @ApiProperty()
    @IsString({ message: 'El campo editorial debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo editorial no debe estar vacío' })
    @MaxLength(40, { message: 'El campo editorial no debe tener más de 40 caracteres.' })
    readonly editorial: string;

    @ApiProperty()
    @IsString({ message: 'El campo idioma debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo idioma no debe estar vacío' })
    @MaxLength(40, { message: 'El campo idioma no debe tener más de 40 caracteres.' })
    readonly idioma: string;

    @ApiProperty()
    @IsString({ message: 'El campo tamañoArchivo debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo tamañoArchivo no debe estar vacío' })
    @MaxLength(40, { message: 'El campo tamañoArchivo no debe tener más de 40 caracteres.' })
    readonly tamañoArchivo: string;

    @IsNumber()
    @IsNotEmpty({ message: 'El campo numeroPaginas no debe estar vacío' })
    readonly numeroPaginas: number;

    @IsNumber()
    @IsNotEmpty({ message: 'El campo precio no debe estar vacío' })
    readonly precio: number;

    @ApiProperty()
    @IsString({ message: 'El campo stock debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo stock no debe estar vacío' })
    @MaxLength(40, { message: 'El campo stock no debe tener más de 40 caracteres.' })
    readonly stock: string
}
