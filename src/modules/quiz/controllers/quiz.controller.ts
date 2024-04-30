import { Body, Controller, DefaultValuePipe, Get, HttpCode, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dtos/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ApiPaginatedResponse } from 'src/common/decorator/api-pagination.response';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService){}

    @Get('/')
    @ApiPaginatedResponse({model: Quiz, description: 'List of quizes'})
    async getAllQuiz(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number =1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number =1
    ): Promise<Pagination<Quiz>>{
        const options: IPaginationOptions = {
            limit: limit, page: page
        }
        return await this.quizService.paginate(options);
    }

    @ApiOkResponse({description: 'Get a quiz by id'})
    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz>{
        return await this.quizService.getQuizById(id);

    }

    @ApiCreatedResponse({description: 'The quiz that got created', type: Quiz})
    @Post('/create')
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
    }
}
