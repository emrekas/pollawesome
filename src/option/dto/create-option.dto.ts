import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsNotEmpty, IsUUID } from 'class-validator';
import { BaseDto } from 'commons/dto/base.dto';

export class CreateOptionDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty()
  content: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  pollId: string;
}
