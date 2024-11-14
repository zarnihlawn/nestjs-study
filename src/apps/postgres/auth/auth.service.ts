import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SigninPayloadType, TokenPayloadType } from './auth.type';
import { UsersService } from 'src/apps/main/users/users.service';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { CryptoJsService } from 'src/services/individual/crypto/crypto-js.service';
import { AppEnvValues } from 'src/resources/env/app.env';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private cryptoJsService: CryptoJsService) {
    }
    async signinUser(payload: SigninPayloadType, ip: string) {
        const user = await this.usersService.findOne({where: {username: payload.username},})

        const isPasswordCorrect = await compare(payload.password, user.password)

        if(!isPasswordCorrect) {
            throw new UnauthorizedException('Password is incorrect');
        }

        const accessTokenPayload: TokenPayloadType = {
            tp: 0,
            uid: user.id,
            ip: ip,
        }
        const accessToken = sign(accessTokenPayload, AppEnvValues.JWT_SECRET_KEY, {
            expiresIn: AppEnvValues.ACCESS_TOKEN_EXP_SECOND,
        });

        const refreshTokenPayload: TokenPayloadType = {
            tp: 1,
            uid: user.id,
            ip: ip,
        }
        const refreshToken = sign(refreshTokenPayload, AppEnvValues.JWT_SECRET_KEY, {
            expiresIn: AppEnvValues.REFRESH_TOKEN_EXP_SECOND,
        });

        return { accessToken, refreshToken }
    }
}
