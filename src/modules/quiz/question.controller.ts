import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { QuestionService } from "./question.service";
import { Question } from "./question.entity";
import { QuizService } from "./quiz.service";

@Controller('Question')
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