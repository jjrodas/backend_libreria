import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { OrdenEntity } from './entities/orden.entity';
import { OrdenService } from './orden.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('ordenes')
@Controller('ordenes')
export class OrdenController {
  constructor(private readonly ordenService: OrdenService) { }

  @Post()
  @ApiCreatedResponse({ type: OrdenEntity })
  create(@Body() createOrdenDto: CreateOrdenDto) {
    return this.ordenService.create(createOrdenDto);
  }

  @Get()
  @ApiOkResponse({ type: OrdenEntity, isArray: true })
  findAll() {
    return this.ordenService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: OrdenEntity })
  findOne(@Param('id') id: string) {
    return this.ordenService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: OrdenEntity })
  update(@Param('id') id: string, @Body() updateOrdenDto: UpdateOrdenDto) {
    return this.ordenService.update(+id, updateOrdenDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.ordenService.remove(+id);
  }
}
