import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum YesNo {
  YES = "Y",
  NO = "N"
}

@Entity()
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
}