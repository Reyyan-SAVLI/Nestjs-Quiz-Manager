import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { UserRegisterRequestDto } from "./dto/user-register.req.dto";


@Injectable()
export class UserService{

    constructor(
        @InjectRepository(User) 
        private quizRepository: Repository<User>,
    ){}

    async doUserRegistration(userRegister: UserRegisterRequestDto): Promise<User>{
       
        
        const user = new User();
        user.name = userRegister.name;
        user.email = userRegister.email;
        user.password = userRegister.password;

        return await user.save();
    }

    async getUserByEmail(email: string): Promise<User | undefined>{
       return User.findOne({where: {email}});
    }
}