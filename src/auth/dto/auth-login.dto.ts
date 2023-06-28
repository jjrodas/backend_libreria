import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AuthLoginDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(20, { message: 'El campo nombre excede los 20 caracteres' })
    @MinLength(3, { message: 'El campo nombre es menor a 4 caracteres' })
    nombre: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo Clave/Contraseña no debe ser vacío' })
    @IsString({ message: 'El campo Clave/Contraseña debe ser de tipo cadena' })
    clave: string;
}