import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsDefined, IsInt, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateOrdenDto {
    @ApiProperty()
    @IsInt({ message: 'El campo idCliente debe ser un número entero.' })
    @IsPositive({ message: 'El campo idCliente debe ser un número positivo.' })
    @IsNumber({}, { message: 'El campo idCliente debe ser de tipo número' })
    @IsNotEmpty({ message: 'El campo idCliente no debe estar vacío.' })
    readonly idCliente: number;

    @ApiProperty()
    @IsInt({ message: 'El campo idLibro debe ser un número entero.' })
    @IsPositive({ message: 'El campo idLibro debe ser un número positivo.' })
    @IsNumber({}, { message: 'El campo idLibro debe ser de tipo número' })
    @IsNotEmpty({ message: 'El campo idLibro no debe estar vacío.' })
    readonly idLibro: number;

    @ApiProperty()
    @IsInt({ message: 'El campo cantidad debe ser un número entero.' })
    @IsPositive({ message: 'El campo cantidad debe ser un número positivo.' })
    @IsNumber({}, { message: 'El campo cantidad debe ser de tipo número' })
    @IsNotEmpty({ message: 'El campo cantidad no debe estar vacío.' })
    readonly cantidad: number;

    @ApiProperty()
    @IsPositive({ message: 'El campo precioUnitario debe ser un número positivo.' })
    @IsNumber({}, { message: 'El campo precioUnitario debe ser de tipo número' })
    @IsNotEmpty({ message: 'El campo precioUnitario no debe estar vacío.' })
    readonly precioUnitario: number;

    @ApiProperty()
    @IsPositive({ message: 'El campo totalVenta debe ser un número positivo.' })
    @IsNumber({}, { message: 'El campo totalVenta debe ser de tipo número' })
    @IsNotEmpty({ message: 'El campo totalVenta no debe estar vacío.' })
    readonly totalVenta: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo fechaEmision debe estar definido.' })
    @IsDateString({}, { message: 'El campo fechaEmision debe ser de tipo fecha.' })
    readonly fechaEmision: Date;
}
