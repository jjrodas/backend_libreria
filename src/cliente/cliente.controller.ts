import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteEntity } from './entities/cliente.entity';

@ApiTags('clientes')
@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) { }

  @Post()
  @ApiCreatedResponse({ type: ClienteEntity })
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  @ApiOkResponse({ type: ClienteEntity, isArray: true })
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ClienteEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ClienteEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(id, updateClienteDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.remove(id);
  }
}
