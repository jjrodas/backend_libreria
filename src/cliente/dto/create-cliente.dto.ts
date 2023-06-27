import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateClienteDto {
    @ApiProperty()
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @IsNotEmpty({ message: 'El campo nombre no debe estar vacío.' })
    @MaxLength(50, { message: 'El campo nombre no debe tener más de 50 caracteres.' })
    readonly nombre: string;

    @ApiProperty()
    @IsEmail({}, { message: 'Introduzca un email válido.' })
    @IsNotEmpty({ message: 'El campo email no debe estar vacío' })
    @MaxLength(40, { message: 'El campo email no debe tener más de 40 caracteres.' })
    readonly email: string;

    @ApiProperty()
    @IsNumber({}, { message: 'El campo teléfono debe ser de tipo número.' })
    @IsNotEmpty({ message: 'El campo teléfono no debe estar vacío.' })
    readonly telefono: number;
}
