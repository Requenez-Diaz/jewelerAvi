import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from './entities/entities.client';
import { createClientsDto } from './dto/dto.client';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Clients)
    private readonly clienRepository: Repository<Clients>,
  ) {}

  async create(clientDto: createClientsDto) {
    const client = await this.clienRepository.create(clientDto);
    await this.clienRepository.save(client);

    return client;
  }

  findAll() {
    return this.clienRepository.find();
  }

  findOne(id: string) {
    return this.clienRepository.findOneBy({ id });
  }

  async delete(id: string) {
    const client = await this.clienRepository.findOneBy({ id });
    await this.clienRepository.delete(client);

    return `clients deleted`;
  }
}
