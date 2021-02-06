import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Board as BoardEntity } from '../Models/boards.entity';


@Injectable()
export default class BoardService {

  constructor(
    @InjectRepository(BoardEntity)
    private boardRepository: Repository<BoardEntity>,
  ) {}

  getAll(
    page: number,
    limit: number
  ): Promise<BoardEntity[]> {
    console.log(page, limit)
    return this.boardRepository.find({
      skip: page * limit,
      take: limit,
      where: {
        isActive: true
      }
    });
  }

  getOne(
    boardId: number
  ): Promise<BoardEntity> {
    return this.boardRepository.findOne({id: boardId})
  }

  save(board: BoardEntity) {
    board.isActive = true
    this.boardRepository.save(board)
  }

  update(boardId: number, board: BoardEntity) {
    this.boardRepository.update(boardId, board)
  }


  getCount(): Promise<number> {
    return this.boardRepository.count()
  }
}
