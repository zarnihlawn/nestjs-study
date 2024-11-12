import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('users')
  // getUsers() {
  //   return this.appService.getUsers();
  // }

  @Get('app')
  redirectToIndexFile(@Res() res: Response) {
    res.redirect('/app/index.html');
  }

  @Get('app/*')
  getApp(@Param('0') filename: string, @Res() res: Response) {
    console.log(filename);

    let filePath = join(__dirname, '../public/app/', filename);
    if (!filename) {
      filePath = join(__dirname, '../public/app/index.html');
    }
    res.sendFile(filePath);
  }
}
