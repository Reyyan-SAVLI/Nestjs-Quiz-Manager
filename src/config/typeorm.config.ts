import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Option } from "src/modules/quiz/entities/option.entity";
import { Question } from "src/modules/quiz/entities/question.entity";
import { Quiz } from "src/modules/quiz/entities/quiz.entity";

export default class TypeOrmConfig{
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions{
        return {
            type: 'mysql',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_HOST'),
            entities: [ Quiz, Question, Option],
            synchronize: true,
        };
    }
}

export const typeOrmConfigAsync : TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService):
    Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService]
   
};




