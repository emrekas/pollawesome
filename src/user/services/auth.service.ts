import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from 'user/dto/auth-credentials.dto';
import { JwtPayload } from 'user/jwt/jwt-payload.interface.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entities/user.entity';
import { Repository } from 'typeorm';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService
  ) { }

  async register(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const user = new User();
    user.username = username;
    user.salt = await genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;
    
    const user = await this.usersRepository.findOne({ where: {username} });

    if (user && await user.validatePassword(password)) {
      const payload: JwtPayload = { username };
      const accessToken = await this.jwtService.signAsync(payload);
  
      return { accessToken };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
   
  }
  
  private async hashPassword(password: string, salt: string) {
    return hash(password, salt);
  }
}
