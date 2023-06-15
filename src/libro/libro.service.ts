import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { LibroEntity } from './entities/libro.entity';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(LibroEntity)
    private libroRepository: Repository<LibroEntity>,
  ) { }

  async create(
    createLibroDto: CreateLibroDto,
  ): Promise<LibroEntity> {
    const existe = await this.libroRepository.findOneBy({
      titulo: createLibroDto.titulo.trim(),
      autor: createLibroDto.autor.trim(),
    });

    if (existe) {
      throw new ConflictException(`El libro ya existe.`);
    }

    return this.libroRepository.save({
      titulo: createLibroDto.titulo.trim(),
      autor: createLibroDto.autor.trim(),
      fechaPublicacion: createLibroDto.fechaPublicacion,
      editorial: createLibroDto.editorial.trim(),
      idioma: createLibroDto.idioma.trim(),
      tamañoArchivo: createLibroDto.tamañoArchivo.trim(),
      numeroPaginas: createLibroDto.numeroPaginas,
      precio: createLibroDto.precio,
      stock: createLibroDto.stock.trim()
    });
  }

  async findAll(): Promise<LibroEntity[]> {
    return this.libroRepository.find();
  }

  async findOne(id: number): Promise<LibroEntity> {
    const libro = await this.libroRepository.findOneBy({ id });

    if (!libro) {
      throw new NotFoundException(`El libro ${id} no existe.`);
    }

    return libro;
  }

  async update(id: number, updateLibroDto: UpdateLibroDto) {
    const libro = await this.libroRepository.findOneBy({ id });

    if (!libro) {
      throw new NotFoundException(`El libro ${id} no existe.`);
    }

    const libroUpdate = Object.assign(libro, updateLibroDto);
    return this.libroRepository.save(libroUpdate);
  }

  async remove(id: number) {
    const existe = await this.libroRepository.findOneBy({ id });

    if (!existe) {
      throw new NotFoundException(`El libro ${id} no existe.`);
    }

    return this.libroRepository.delete(id);
  }
}
