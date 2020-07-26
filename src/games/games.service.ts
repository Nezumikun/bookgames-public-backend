import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game, YesNo } from './game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  findAll(): Promise<Game[]> {
    return this.gamesRepository.find({
      select: [ 'id', 'title', 'subtitle', 'isComplited', 'countQuestion', 'countTeam', 'activatedTime', 'finishTime' ],
      where: {
        isActive: YesNo.YES
      },
      order: {
        id: "DESC"
      }
    });
  }

  findOne(id: number): Promise<Game> {
    return this.gamesRepository.findOne(id);
  }
}

