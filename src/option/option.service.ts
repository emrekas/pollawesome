import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from "entities/option.entity";
import { DeleteOptionDto } from './dto/delete-option.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Poll } from 'entities/poll.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
    @InjectRepository(Poll)
    private pollRepository: Repository<Poll>
  ) { }

  async createOption(createOptionDto: CreateOptionDto): Promise<Option> {
    const { content, pollId, userId } = createOptionDto;

    const found = await this.pollRepository.findOne({where: {userId, id:pollId}});

    if (!found) {
      throw new NotFoundException();
    }

    const option = new Option();
    option.content = content;
    option.pollId = pollId;
    option.createdBy = userId;
    option.creationDate = new Date();

    return await option.save();
  }

  async getOptions(): Promise<Option[]> {
    return this.optionRepository.find();
  }

  async deleteOption(deleteOptionDto: DeleteOptionDto): Promise<void> {
    const { id, userId, pollId } = deleteOptionDto;
    console.log(deleteOptionDto);
    const result = this.optionRepository.delete({ id, pollId, createdBy: userId });
    if ((await result).affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
}
