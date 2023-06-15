import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenEntity } from './entities/orden.entity';
import { OrdenController } from './orden.controller';
import { OrdenService } from './orden.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrdenEntity])],
  controllers: [OrdenController],
  providers: [OrdenService]
})
export class OrdenModule { }
