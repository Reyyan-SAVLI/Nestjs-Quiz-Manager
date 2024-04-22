import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "./dto/create-quiz.dto";
import { Quiz } from "./quiz.entity";
import { FindOneOptions, Repository } from "typeorm";


@Injectable()
export class QuizService{

    constructor(
        @InjectRepository(Quiz) 
        private quizRepository: Repository<Quiz>,
    ){}

    getAllQuiz(){
        return 'Get Quizes';
    }

    async getQuizById(id: number): Promise<Quiz>{
        
        return await this.quizRepository.findOne(id);
    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }
}