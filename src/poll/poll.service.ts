import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PollRepository } from './poll.repository';
import { CreatePollDto } from './dto/create-poll.dto';
import { Poll } from 'entities/poll.entity';

@Injectable()
export class PollService {

  constructor(
    @InjectRepository(PollRepository)
    private pollRepository: PollRepository
  ) { }

  async createPoll(createPollDto: CreatePollDto): Promise<Poll> {
    return this.pollRepository.createPoll(createPollDto);
  }
}
