import { Module } from '@nestjs/common';
import { PuppeteerModule } from 'nest-puppeteer';
import { ExtractController } from './extract.controller';
import { ExtractService } from './extract.service';

@Module({
  imports: [
    PuppeteerModule.forRoot({
      isGlobal: true,
      pipe: true,
    }),
  ],
  controllers: [ExtractController],
  providers: [ExtractService],
})
export class ExtractModule {}
