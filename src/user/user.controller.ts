import { Controller, Post, Body, ValidationPipe, Get } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('user')
export class UserController {

  constructor(private authService: AuthService) { }

  @Post('/register')
  register(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> { 
    console.log("aaa");
    
    return this.authService.register(authCredentialsDto);
  }

  @Post('/login') 
  login(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }>{
    return this.authService.login(authCredentialsDto);
  }
}
