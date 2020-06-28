import { IsString, MaxLength, MinLength, IsDate, IsNotEmpty, IsDateString, IsISO8601 } from "class-validator";
import { Exclude } from 'class-transformer';

export class CreatePollDto {
  
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(4)
  title: string;

  @IsNotEmpty()
  @IsISO8601()
  startDate: Date;

  @IsNotEmpty()
  @IsISO8601()
  endDate: Date;

  @Exclude()
  userId: string;
}