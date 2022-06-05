import { Injectable, NotFoundException } from '@nestjs/common';
import { OptionRepository } from './option.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from "entities/option.entity";
import { DeleteOptionDto } from './dto/delete-option.dto';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private optionRepository: OptionRepository
  ) { }

  async createOption(createOptionDto: CreateOptionDto): Promise<Option> {
    return this.optionRepository.createOption(createOptionDto);
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
