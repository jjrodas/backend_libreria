import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto {
    @ApiProperty()
    @IsString({ message: 'El campo nombre debe ser de tipo cadena.' })
    @IsNotEmpty({ message: 'El campo nombre no debe estar vacío.' })
    readonly nombre: string;
}
