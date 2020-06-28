import { Module } from '@nestjs/common';
import { PollService } from './poll.service';
import { PollController } from './poll.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PollRepository } from './poll.repository';
import { UserModule } from 'user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PollRepository]),
    UserModule
  ],
  providers: [PollService],
  controllers: [PollController]
})
export class PollModule { }
