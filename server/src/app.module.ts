import { Module } from '@nestjs/common';

import BoardModule from './Boards/boards.module';
import FileModule from './File/file.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';

import CONFIG from './config';

const MODE = process.env.mode || 'dev';

@Module({
  imports: [
    BoardModule,
    FileModule,
    TypeOrmModule.forRoot(CONFIG.DB[MODE]),
    // TODO: serve static은 임시사용. nginx에서 처리,
    ServeStaticModule.forRoot({
      rootPath: CONFIG.FILE[MODE].dest
    })
  ],
})
export class AppModule {}
