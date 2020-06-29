import { Controller, Post, UsePipes, ValidationPipe, UseGuards, Body, Delete } from '@nestjs/common';
import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { Option } from 'entities/option.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'user/decorators/get-user.decorators';
import { User } from 'entities/user.entity';
import { DeleteOptionDto } from './dto/delete-option.dto';

@Controller('option')
@UseGuards(AuthGuard())
@UsePipes(ValidationPipe)
export class OptionController {
  constructor(
    private optionService: OptionService
  ) { }

  @Post()
  async createOption(
    @Body() createOptionDto: CreateOptionDto,
    @GetUser() user: User
  ): Promise<Option> {

    createOptionDto.userId = user.id;
    return this.optionService.createOption(createOptionDto);
  }

  @Delete()
  async deleteOption(
    @Body() deleteOptionDto: DeleteOptionDto,
    @GetUser() user: User
  ): Promise<void>{
    deleteOptionDto.userId = user.id;
    return await this.optionService.deleteOption(deleteOptionDto);
  }
}
