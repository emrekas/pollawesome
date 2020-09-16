import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PollModule } from './poll/poll.module';
import { OptionModule } from './option/option.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { VotingModule } from './voting/voting.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    PollModule,
    OptionModule,
    VotingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
