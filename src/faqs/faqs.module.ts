import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaqsService } from './faqs.service';
import { FaqsController } from './faqs.controller';
import { Faqs } from './entities/faq.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Faqs])],
  controllers: [FaqsController],
  providers: [FaqsService],
})
export class FaqsModule {}
