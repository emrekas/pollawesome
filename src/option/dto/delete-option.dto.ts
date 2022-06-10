import { BaseDto } from 'commons/dto/base.dto';
import { IsUUID, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteOptionDto extends BaseDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  id: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  pollId: string;
}
