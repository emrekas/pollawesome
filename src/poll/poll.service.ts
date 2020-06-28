import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PollService {

  constructor(
    @InjectRepository(PollRepository)
    private pollRepository:PollRepository
  ) {  }
}
