import { Injectable } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { Poll } from 'entities/poll.entity';

@Injectable()
export class PollService {

  async createPoll(createPollDto: CreatePollDto): Promise<Poll> {
    const { title, startDate, endDate, userId } = createPollDto;

    const poll = new Poll();
    poll.title = title;
    poll.startDate = startDate;
    poll.endDate = endDate;
    poll.userId = userId;
    poll.createdBy = userId;
    poll.creationDate = new Date();

    await poll.save();

    return poll;
  }
}
