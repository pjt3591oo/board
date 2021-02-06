import { Injectable } from '@nestjs/common';

export interface Hello {
  data: string
}

@Injectable()
export class AppService {
  getHello(): Hello {
    return {
      data: "hello world"
    };
  }
}
