import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { MESSAGES, REGEX } from "src/app.utils";

export class UserRegisterRequestDto{

    @ApiProperty({
        description: 'The name of the user',
        example: 'Reyyan'
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'The email of the user',
        example: 'reyy@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @ApiProperty({
        description: 'The password of the user',
        example: 'Password@123'
    })
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {message: MESSAGES.PASSWORD_RULE_MESSAGE})
    password: string;

    @ApiProperty({
        description: 'Confirm the password',
        example: 'Password@123'
    })
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {message: MESSAGES.PASSWORD_RULE_MESSAGE})
    confirm: string;
}