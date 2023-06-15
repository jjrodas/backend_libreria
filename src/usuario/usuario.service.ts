import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioEntity } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) { }

  async create(
    createUsuarioDto: CreateUsuarioDto,
  ): Promise<UsuarioEntity> {
    const existe = await this.usuarioRepository.findOneBy({
      nombre: createUsuarioDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException(`El usuario ${createUsuarioDto.nombre} ya existe.`);
    }

    return this.usuarioRepository.save({
      nombre: createUsuarioDto.nombre.trim(),
      clave: createUsuarioDto.clave.trim(),
    });
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException(`El usuario ${id} no existe.`);
    }

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException(`El usuario ${id} no existe.`);
    }

    const usuarioUpdate = Object.assign(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(usuarioUpdate);
  }

  async remove(id: number) {
    const existe = await this.usuarioRepository.findOneBy({ id });

    if (!existe) {
      throw new NotFoundException(`El usuario ${id} no existe.`);
    }

    return this.usuarioRepository.delete(id);
  }
}
