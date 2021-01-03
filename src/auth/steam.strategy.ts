import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-steam';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      apiKey: '', //Enter API key here from https://steamcommunity.com/dev/apikey
      realm: 'http://localhost:3000/',
      returnURL: 'http://localhost:3000/auth/steam/return',
    });
  }

  async validate(identifier, profile, done): Promise<any> {
    //console.log(profile);
    return profile;
  }
}
