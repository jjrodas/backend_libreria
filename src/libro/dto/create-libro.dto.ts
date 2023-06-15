import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsDefined, IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength } from "class-validator";

export class CreateLibroDto {
    @ApiProperty()
    @IsString({ message: 'El campo titulo debe ser de tipo cadena' })
    @IsNotEmpty({ message: 'El campo titulo no debe estar vacío.' })
    @MaxLength(60, { message: 'El campo titulo no debe tener más de 60 caracteres.' })
    readonly titulo: string;

    @ApiProperty()
    @IsString({ message: 'El campo autor debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo autor no debe estar vacío' })
    @MaxLength(50, { message: 'El campo autor no debe tener más de 50 caracteres.' })
    readonly autor: string;

    @ApiProperty()
    @IsDefined({ message: 'El campo fechaPublicacion debe estar definido' })
    @IsDateString({}, { message: 'El campo fechaPublicacion debe ser de tipo fecha' })
    readonly fechaPublicacion: Date;

    @ApiProperty()
    @IsString({ message: 'El campo editorial debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo editorial no debe estar vacío' })
    @MaxLength(30, { message: 'El campo editorial no debe tener más de 30 caracteres.' })
    readonly editorial: string;

    @ApiProperty()
    @IsString({ message: 'El campo idioma debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo idioma no debe estar vacío' })
    @MaxLength(15, { message: 'El campo idioma no debe tener más de 15 caracteres.' })
    readonly idioma: string;

    @ApiProperty()
    @IsString({ message: 'El campo tamañoArchivo debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo tamañoArchivo no debe estar vacío' })
    readonly tamañoArchivo: string;

    @ApiProperty()
    @IsNumber()
    @IsInt({ message: 'El campo numeroPaginas solo acepta números enteros' })
    @IsPositive({ message: 'El campo numeroPaginas no acepta números negativos.' })
    @IsNotEmpty({ message: 'El campo numeroPaginas no debe estar vacío' })
    readonly numeroPaginas: number;

    @ApiProperty()
    @IsPositive({ message: 'El campo precio no acepta números negativos.' })
    @IsNumber()
    @IsNotEmpty({ message: 'El campo precio no debe estar vacío' })
    readonly precio: number;

    @ApiProperty()
    @IsString({ message: 'El campo stock debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo stock no debe estar vacío' })
    @MaxLength(15, { message: 'El campo stock no debe tener más de 15 caracteres.' })
    readonly stock: string
}
