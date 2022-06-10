import {
  IsString,
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsISO8601,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'commons/dto/base.dto';

export class CreatePollDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(4)
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsISO8601()
  @ApiProperty()
  startDate: Date;

  @IsNotEmpty()
  @IsISO8601()
  @ApiProperty()
  endDate: Date;
}
