import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/controllers/quiz.controller';
import { QuizService } from './modules/quiz/services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
  TypeOrmModule.forRoot(typeOrmConfig), 
  QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
