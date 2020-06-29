import { IsString, MaxLength, IsNotEmpty, IsUUID } from "class-validator";
import { BaseDto } from 'commons/dto/base.dto';

export class CreateOptionDto extends BaseDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  content: string;

  @IsNotEmpty()
  @IsUUID()
  pollId: string;

}