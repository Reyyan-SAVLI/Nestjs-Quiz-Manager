import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Question } from "./question.entity";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { Quiz } from "./quiz.entity";


@Injectable()
export class QuestionService{

    constructor(
        @InjectRepository(Question) 
        private questionRepository: Repository<Question>,
    ){}

    async createQuestion( question: CreateQuestionDto, quiz: Quiz): Promise<Question>{
      const newQuestion = await this.questionRepository.save({
        question: question.question
      });

      

      return newQuestion;
    }
   
}