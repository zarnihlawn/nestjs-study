import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninPayloadType } from './auth.type';
import { CreateSigninPayloadPipe } from './pipes/signin-payload.pipe';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {};

    @Post('signin')
    signinUser(@Body(CreateSigninPayloadPipe) payload: SigninPayloadType, @Req() req: Request) {
        return this.authService.signinUser(payload, req.ip);
    }
}
