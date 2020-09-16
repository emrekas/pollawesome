import { Module } from '@nestjs/common';
import { VotingGateway } from './voting.gateway';
import { VotingService } from './voting.service';

@Module({
  providers: [VotingService, VotingGateway]
})
export class VotingModule {}
