import { Controller, Get } from '@nestjs/common';
import { AppService, Hello } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Hello {
    return this.appService.getHello();
  }
}
