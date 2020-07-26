import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module'
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GamesModule,
    QuestionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
