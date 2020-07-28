import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from 'src/games/game.entity';

@Entity('v_question')
export class Question {
  @PrimaryGeneratedColumn({
    name: "QuestionID"
  })
  id: number;

  @ManyToOne(type => Game, game => game.questions)
  game: Game

  @Column({
    type: "text",
    name: "Text"
  })
  text: string;

  @Column({
    type: "varchar",
    name: "Author",
    length: 250
  })
  author: string;

  @Column({
    type: "varchar",
    name: "Title",
    length: 250
  })
  bookTitle: string;

  @Column({
    type: "varchar",
    name: "BookDetail",
    length: 250
  })
  bookDetail: string;

  @Column({
    type: "varchar",
    name: "Word",
    length: 250
  })
  word: string;

  @Column({
    type: "varchar",
    name: "Persons",
    length: 250
  })
  persons: string;

  @Column({
    type: "text",
    name: "Quote"
  })
  quote: string;

  @Column({
    type: "tinyint",
    name: "Number"
  })
  number: number;
}
