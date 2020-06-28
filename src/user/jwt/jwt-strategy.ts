import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "user/user.repository";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy, ExtractJwt } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { JwtPayload } from "./jwt-payload.interface.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy)
{
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:'veryverysecretkey'
    });
  }

  async validate(payload: JwtPayload) {
    const { username } = payload;
    const user = await this.userRepository.findOne({ username });

    if (!user) {
      throw new UnauthorizedException();
    }
    
    return user;
  }
}