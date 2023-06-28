import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/auth-public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteEntity } from './entities/cliente.entity';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('clientes')
@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) { }

  @Public()
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

  //@Public()
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
