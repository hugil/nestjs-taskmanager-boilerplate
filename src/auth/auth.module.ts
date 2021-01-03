import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { SteamStrategy } from './steam.strategy';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'steam',
    }),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, SteamStrategy],
  exports: [JwtStrategy, SteamStrategy, PassportModule],
})
export class AuthModule {}
