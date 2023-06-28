import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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

    const usuario: UsuarioEntity = new UsuarioEntity();
    usuario.nombre = createUsuarioDto.nombre.trim();
    usuario.clave = process.env.DEFAULT_PASSWORD;

    const usuarioDB = await this.usuarioRepository.save(usuario);
    delete usuarioDB.clave;
    return usuarioDB;
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException(`El usuario con el id: ${id} no existe.`);
    }

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException(`El usuario con el id: ${id} no existe.`);
    }

    const usuarioUpdate = Object.assign(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(usuarioUpdate);
  }

  async remove(id: number) {
    const existe = await this.usuarioRepository.findOneBy({ id });

    if (!existe) {
      throw new NotFoundException(`El usuario con el id: ${id} no existe.`);
    }

    return this.usuarioRepository.delete(id);
  }

  async validate(nombre: string, clave: string): Promise<UsuarioEntity> {
    const usuarioOk = await this.usuarioRepository.findOne({
      where: { nombre },
      select: ['id', 'nombre', 'clave'],
    });

    if (!usuarioOk) throw new NotFoundException('Usuario inexistente');

    if (!(await usuarioOk?.validatePassword(clave))) {
      throw new UnauthorizedException('Clave incorrecta');
    }

    delete usuarioOk.clave;
    return usuarioOk;
  }
}
