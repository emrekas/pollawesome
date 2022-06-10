import { Module } from '@nestjs/common';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'user/user.module';
import { Poll } from 'entities/poll.entity';
import { Option } from 'entities/option.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Option, Poll]),
    UserModule
  ],
  controllers: [OptionController],
  providers: [OptionService]
})
export class OptionModule {}
