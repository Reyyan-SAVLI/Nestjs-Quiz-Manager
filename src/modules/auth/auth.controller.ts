import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req): Promise<any>{

        return await this.authService.generateToken(req.user);
    }


    @UseGuards(AuthGuard('jwt'))
    @Get('user')
    async user(@Request() req): Promise<any> {

        return req.user;
    }
}
