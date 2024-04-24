import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Option } from "src/modules/quiz/entities/option.entity";
import { Question } from "src/modules/quiz/entities/question.entity";
import { Quiz } from "src/modules/quiz/entities/quiz.entity";

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'quiz',
    entities: [ Quiz, Question, Option],
    synchronize: true,
}