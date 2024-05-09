import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req, @Body() loginDto: LoginDto): Promise<any>{

        return await this.authService.generateToken(req.user);
    }


    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get('user')
    async user(@Request() req): Promise<any> {

        return req.user;
    }
}
