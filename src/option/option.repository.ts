import { Repository, EntityRepository, getCustomRepository } from "typeorm";
import { Option } from "../entities/option.entity";
import { CreateOptionDto } from "./dto/create-option.dto";
import { PollRepository } from '../poll/poll.repository';
import { NotFoundException } from "@nestjs/common";

@EntityRepository(Option)
export class OptionRepository extends Repository<Option>{

  async createOption(createOptionDto: CreateOptionDto): Promise<Option> {
    const pollRepository = getCustomRepository(PollRepository);
    const { content, pollId, userId } = createOptionDto;

    const found = await pollRepository.findOne({userId, id:pollId});

    if (!found) {
      throw new NotFoundException();
    }

    var option = new Option();
    option.content = content;
    option.pollId = pollId;
    option.createdBy = userId;
    option.creationDate = new Date();

    return await option.save();
  }

}