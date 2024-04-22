import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Question } from "src/modules/quiz/question.entity";
import { Quiz } from "src/modules/quiz/quiz.entity";

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'quiz',
    entities: [ Quiz, Question],
    synchronize: true,
}