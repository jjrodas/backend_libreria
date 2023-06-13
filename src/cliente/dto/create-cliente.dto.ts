import { ApiProperty } from "@nestjs/swagger";

export class CreateClienteDto {
    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly email: string;
}
