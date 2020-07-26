import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Question } from '../questions/question.entity'

export enum YesNo {
  YES = "Y",
  NO = "N"
}

@Entity("v_game")
export class Game {
  @PrimaryGeneratedColumn({
    name: "GameID"
  })
  id: number;

  @Column({
    type: "varchar",
    name: "Title",
    length: 250
  })
  title: string;

  @Column({
    type: "varchar",
    name: "SubTitle",
    length: 250
  })
  subtitle: string;

  @Column({
    type: "varchar",
    name: "GoogleDocID",
    length: 250
  })
  googleDocID: string;

  @Column({
    type: "varchar",
    name: "ImapSearch",
    length: 250
  })
  imapSearch: string;

  @Column({
    type: "enum",
    name: "IsActive",
    enum: YesNo,
    default: YesNo.NO
  })
  isActive: YesNo;

  @Column({
    type: "datetime",
    name: "ActivatedTime"
  })
  activatedTime: Date;

  @Column({
    type: "enum",
    name: "IsTipsPublished",
    enum: YesNo,
    default: YesNo.NO
  })
  isTipsPublished: YesNo;

  @Column({
    type: "enum",
    name: "IsComplited",
    enum: YesNo,
    default: YesNo.NO
  })
  isComplited: YesNo;

  @Column({
    type: "datetime",
    name: "ComplitedTime"
  })
  finishTime: Date;

  @Column({
    name: "QuestionCount"
  })
  countQuestion: number;

  @Column({
    name: "TeamCount"
  })
  countTeam: number;

  @OneToMany(type => Question, question => question.game)
  questions: Question[];
}