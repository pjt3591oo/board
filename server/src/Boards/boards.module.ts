import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import BoardController from './boards.controller';
import BoardService from './boards.service';

import { Board } from '../Models/boards.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  controllers: [BoardController],
  providers: [BoardService],
})
  
export default class BoardModule {}
