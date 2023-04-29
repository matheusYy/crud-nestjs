import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  public index() {
    return {
      title: 'render for nestjs@',
    };
  }
}
