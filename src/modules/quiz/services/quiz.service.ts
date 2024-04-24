import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dtos/create-quiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { Repository } from "typeorm";


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
        return await this.quizRepository.findOne({ where: { id: id } , relations: ['questions']});
    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }
}