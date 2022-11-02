import { Controller, Get, Query } from '@nestjs/common';
import { ExtractService } from './extract.service';

@Controller('extract')
export class ExtractController {
  constructor(private readonly extract: ExtractService) {}

  @Get('title')
  getTitle(@Query('url') url: string) {
    return this.extract.getTitle(url);
  }
}
