import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { LibroModule } from './libro/libro.module';
import { OrdenModule } from './orden/orden.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '**/*.entity.{ts,js}'],
    synchronize: true,
    autoLoadEntities: true
  }),
  ClienteModule,
  LibroModule,
  OrdenModule,
  UsuarioModule,
  AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
