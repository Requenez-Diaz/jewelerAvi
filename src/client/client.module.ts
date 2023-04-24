import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { Clients } from './entities/entities.client';

@Module({
  imports: [TypeOrmModule.forFeature([Clients])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
