import { Module } from '@nestjs/common';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionRepository } from './option.repository';
import { UserModule } from 'user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OptionRepository]),
    UserModule
  ],
  controllers: [OptionController],
  providers: [OptionService]
})
export class OptionModule {}
