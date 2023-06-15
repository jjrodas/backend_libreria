import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { OrdenEntity } from './entities/orden.entity';

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(OrdenEntity)
    private ordenRepository: Repository<OrdenEntity>,
  ) { }

  async create(
    createOrdenDto: CreateOrdenDto,
  ): Promise<OrdenEntity> {
    const existe = await this.ordenRepository.findOneBy({
      idCliente: createOrdenDto.idCliente,
      idLibro: createOrdenDto.idLibro,
    });

    if (existe) {
      throw new ConflictException(`La orden ya existe.`);
    }

    return this.ordenRepository.save({
      idCliente: createOrdenDto.idCliente,
      idLibro: createOrdenDto.idLibro,
      cantidad: createOrdenDto.cantidad,
      precioUnitario: createOrdenDto.precioUnitario,
      totalVenta: createOrdenDto.totalVenta,
      fechaEmision: createOrdenDto.fechaEmision,
    });
  }

  async findAll(): Promise<OrdenEntity[]> {
    return this.ordenRepository.find({ relations: { cliente: true, libro: true } });
  }

  async findOne(id: number): Promise<OrdenEntity> {
    const orden = await this.ordenRepository.findOne({ where: { id }, relations: { cliente: true, libro: true } });

    if (!orden) {
      throw new NotFoundException(`La orden ${id} no existe.`);
    }

    return orden;
  }

  async update(id: number, updateOrdenDto: UpdateOrdenDto) {
    const orden = await this.ordenRepository.findOneBy({ id });

    if (!orden) {
      throw new NotFoundException(`La orden ${id} no existe.`);
    }

    const ordenUpdate = Object.assign(orden, updateOrdenDto);
    return this.ordenRepository.save(ordenUpdate);
  }

  async remove(id: number) {
    const existe = await this.ordenRepository.findOneBy({ id });

    if (!existe) {
      throw new NotFoundException(`La orden ${id} no existe.`);
    }

    return this.ordenRepository.delete(id);
  }
}
