import { Controller, UsePipes, ValidationPipe, UseGuards, Body, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePollDto } from './dto/create-poll.dto';
import { GetUser } from 'user/decorators/get-user.decorators';
import { User } from 'entities/user.entity';
import { Poll } from 'entities/poll.entity';
import { PollService } from './poll.service';

@Controller('poll')
@UseGuards(AuthGuard())
export class PollController {

  constructor(private pollService: PollService) { }

  @Post()
  @UsePipes(ValidationPipe)
  createPoll(
    @Body() createPollDto: CreatePollDto,
    @GetUser() user: User
  ): Promise<Poll> {
    createPollDto.userId = user.id;
    return this.pollService.createPoll(createPollDto);
  }

}
