import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dtos/create-question.dto";
import { QuestionService } from "../services/question.service";
import { Question } from "../entities/question.entity";
import { QuizService } from "../services/quiz.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Questions')
@Controller('question')
export class QuestionController{

    constructor( 
        private questionService: QuestionService,
        private quizService: QuizService){}

    


    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question>{

        const quiz = await this.quizService.getQuizById(question.quizId);
        return await this.questionService.createQuestion(question, quiz);
    }

}