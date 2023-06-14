import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibroEntity } from './entities/libro.entity';
import { LibroController } from './libro.controller';
import { LibroService } from './libro.service';

@Module({
  imports: [TypeOrmModule.forFeature([LibroEntity])],
  controllers: [LibroController],
  providers: [LibroService]
})
export class LibroModule { }
