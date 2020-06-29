import { BaseDto } from "commons/dto/base.dto";
import { IsUUID, IsNotEmpty } from "class-validator";

export class DeleteOptionDto extends BaseDto {

  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsUUID()
  pollId: string;

}