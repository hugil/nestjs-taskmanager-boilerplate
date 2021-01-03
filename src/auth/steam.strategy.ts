import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-steam';

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor() {
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
