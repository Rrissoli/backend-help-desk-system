import { Injectable } from '@nestjs/common';
import { CreateKnowledgeBaseDto } from './dto/create-knowledge-base.dto';
import { UpdateKnowledgeBaseDto } from './dto/update-knowledge-base.dto';

@Injectable()
export class KnowledgeBaseService {
  create(createKnowledgeBaseDto: CreateKnowledgeBaseDto) {
    return `This action adds a new knowledgeBase with the following details: ${JSON.stringify(createKnowledgeBaseDto)}`;
  }

  findAll() {
    return `This action returns all knowledgeBase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} knowledgeBase`;
  }

  update(id: number, updateKnowledgeBaseDto: UpdateKnowledgeBaseDto) {
    return `This action updates a #${id} knowledgeBase with the following details: ${JSON.stringify(updateKnowledgeBaseDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} knowledgeBase`;
  }
}
