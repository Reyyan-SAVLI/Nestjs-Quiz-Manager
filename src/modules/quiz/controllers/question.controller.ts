import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dtos/create-question.dto";
import { QuestionService } from "../services/question.service";
import { Question } from "../entities/question.entity";
import { QuizService } from "../services/quiz.service";
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Questions')
@ApiBearerAuth()
@Controller('question')
export class QuestionController{

    constructor( 
        private questionService: QuestionService,
        private quizService: QuizService){}

    


    @Post('')
    @UsePipes(ValidationPipe)
    @ApiCreatedResponse({
        description: 'Question added to a quiz',
        type: Question,
      })
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question>{

        const quiz = await this.quizService.getQuizById(question.quizId);
        return await this.questionService.createQuestion(question, quiz);
    }

}