import { IsString, MaxLength, MinLength, IsDate, IsNotEmpty } from "class-validator";
import { Exclude } from 'class-transformer';

export class CreatePollDto {
  
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(4)
  title: string;

  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  endDate: Date;

  @Exclude()
  userId: string;
}