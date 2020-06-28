import { Poll } from "../entities/poll.entity";
import { Repository, EntityRepository } from "typeorm";
import { CreatePollDto } from "./dto/create-poll.dto";


@EntityRepository(Poll)
export class PollRepository extends Repository<Poll>{
  
  async createPoll(
    createPollDto: CreatePollDto,
    
  )
}