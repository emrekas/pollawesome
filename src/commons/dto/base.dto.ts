import { Exclude } from "class-transformer";

export class BaseDto {
  @Exclude()
  userId: string;
}