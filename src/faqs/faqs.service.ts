import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { EntityManager } from 'typeorm';
import { Faqs } from './entities/faq.entity';

@Injectable()
export class FaqsService {
  constructor(private readonly entityManager: EntityManager) {}

  async create(createFaqDto: CreateFaqDto) {
    const faq = new Faqs(createFaqDto);

    await this.entityManager.save(faq);

    return 'This action adds a new faq';
  }

  findAll() {
    return `This action returns all faqs`;
  }

  async findOne(id: number) {
    const data = await this.entityManager.findOneBy(Faqs, { id });
    return data;
    // return `This action returns a #${id} faq`;
  }

  update(id: number, updateFaqDto: UpdateFaqDto) {
    return `This action updates a #${id} faq`;
  }

  remove(id: number) {
    return `This action removes a #${id} faq`;
  }
}
