import { Module } from '@nestjs/common';
import { PollService } from './poll.service';
import { PollController } from './poll.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'user/user.module';
import { Poll } from 'entities/poll.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poll]),
    UserModule
  ],
  providers: [PollService],
  controllers: [PollController]
})
export class PollModule { }
