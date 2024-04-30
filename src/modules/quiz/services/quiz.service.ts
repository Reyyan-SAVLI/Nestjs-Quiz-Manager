import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dtos/create-quiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { Repository } from "typeorm";
import { IPaginationOptions, Pagination, paginate} from "nestjs-typeorm-paginate";


@Injectable()
export class QuizService{

    constructor(
        @InjectRepository(Quiz) 
        private quizRepository: Repository<Quiz>,
    ){}

    async getAllQuiz(): Promise<Quiz[]>{
        return await this.quizRepository
        .createQueryBuilder('q')
        .leftJoinAndSelect('q.questions', 'qt')
        .leftJoinAndSelect('qt.options', 'o')
        .getMany();
    }

    async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>>{
        const qb = this.quizRepository.createQueryBuilder('q');
        qb.orderBy('q.id', 'DESC');

        return paginate<Quiz>(qb, options);
    }

    async getQuizById(id: number): Promise<Quiz>{
        return await this.quizRepository.findOne({ 
            where: { id: id } , 
            relations: ['questions', 'questions.options']});
    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }
}