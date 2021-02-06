import {
  Controller,
  Get, Post, Put, Delete,
  Param, Body, Query,
  HttpException, HttpStatus, ParseIntPipe
} from '@nestjs/common';

import BoardService from './boards.service';

import { Board, Board as BoardEntity } from '../Models/boards.entity';
import { ValidationPipe } from './validator/board.validator';

@Controller('/board')
export default class BoardController {
  private readonly limit = 10

  constructor(private readonly boardService: BoardService) { }
  
  // TODO: isActive: true만 조회
  @Get()
  async getBoards(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number
  ) {
    page = page || 0
    limit = limit || this.limit
    return {
      results: await this.boardService.getAll(page, limit),
      totalPage: Math.floor(await this.boardService.getCount() / limit)
    };
  }

  @Get("/:id")
  async getBoard(
    @Param('id', ParseIntPipe) boardId: number
  ): Promise<BoardEntity>  {
    let board = await this.boardService.getOne(boardId);
    
    if (!board) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT FOUND',
        message: `id: ${boardId}(은/는) 찾을 수 없습니다.`
      }, HttpStatus.NOT_FOUND);
    }

    return board
  }

  @Post()
  createBoard(
    @Body(ValidationPipe) board: BoardEntity
  ) {
    this.boardService.save(board);
    return {
      ...board
    }
  }

  @Put('/:id')
  async updateBoard(
    @Param('id', ParseIntPipe) boardId: number,
    @Body(ValidationPipe) body: BoardEntity
  ): Promise<BoardEntity> {
    
    let board: BoardEntity = await this.boardService.getOne(boardId);
    
    if (!board) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT FOUND',
        message: `id: ${boardId}(은/는) 찾을 수 없습니다.`
      }, HttpStatus.NOT_FOUND);
    }

    board = {
      ...board,
      title: body.title,
      body: body.body,
      isActive: body.isActive || true
    }
    console.log(board)
    await this.boardService.update(boardId, board)

    return board
  }

  // TODO: 삭제는 active: true/false로 구현
  @Delete("/:id")
  async deleteBoard(
    @Param('id', ParseIntPipe) boardId: number
  ) {
    let board: BoardEntity = await this.boardService.getOne(boardId);
    
    if (!board) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'NOT FOUND',
        message: `id: ${boardId}(은/는) 찾을 수 없습니다.`
      }, HttpStatus.NOT_FOUND);
    }

    board = {
      ...board,
      isActive: false
    }

    await this.boardService.update(boardId, board)
  }
}