import { Module } from '@nestjs/common';

import { MulterModule } from '@nestjs/platform-express';
import fileController from './file.controller';
import FileService from './file.service';

import CONFIG from '../config';

const MODE = process.env.mode || 'dev';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: CONFIG.FILE[MODE].dest,
      }),
    })
  ],
  controllers: [fileController],
  providers: [FileService]
})
export default class AppModule {}
