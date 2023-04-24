import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { createClientsDto } from './dto/dto.client';

@Controller('client')
export class ClientController {
  constructor(private readonly clientServiceRepo: ClientService) {}

  @Post()
  create(@Body() clientDto: createClientsDto) {
    return this.clientServiceRepo.create(clientDto);
  }

  @Get()
  findAll() {
    return this.clientServiceRepo.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientServiceRepo.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.clientServiceRepo.delete(id);
  }
}
