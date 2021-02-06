import { Controller, UseInterceptors, Post, UploadedFiles, Res, Get, Req } from '@nestjs/common';
import { Request, Response } from 'express';

import FileService from './file.service';


import { FileFieldsInterceptor } from '@nestjs/platform-express'


@Controller('file')
export default class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor(
    [
      { name: 'file', maxCount: 1 },
    ]
  ))
  upload(
    @UploadedFiles() files,
  ) {
    console.log(files.file[0])
    return {
      path: files.file[0].filename
    }
    // return this.appService.getHello();
  }
}
