import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { LibroEntity } from './entities/libro.entity';
import { LibroService } from './libro.service';

@ApiTags('libros')
@Controller('libros')
export class LibroController {
  constructor(private readonly libroService: LibroService) { }

  @Post()
  @ApiCreatedResponse({ type: LibroEntity })
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.libroService.create(createLibroDto);
  }

  @Get()
  @ApiOkResponse({ type: LibroEntity, isArray: true })
  findAll() {
    return this.libroService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: LibroEntity })
  findOne(@Param('id') id: string) {
    return this.libroService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: LibroEntity })
  update(@Param('id') id: string, @Body() updateLibroDto: UpdateLibroDto) {
    return this.libroService.update(+id, updateLibroDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.libroService.remove(+id);
  }
}
