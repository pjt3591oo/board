import {
  PipeTransform, Injectable, ArgumentMetadata,
  HttpException, HttpStatus
} from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    
    let { title, body } = value
    let message: string = '' ;

    if (!title) message = 'title 항목이 없습니다.'
    else if (!body) message = 'body 항목이 없습니다.'

    if (message) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'VALIDATOR',
        message
      }, HttpStatus.BAD_REQUEST);
    }

    return value;
  }
}