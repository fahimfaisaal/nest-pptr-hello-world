import { Module } from '@nestjs/common';
import { PuppeteerModule } from 'nest-puppeteer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExtractModule } from './extract/extract.module';

@Module({
  imports: [
    ExtractModule,
    PuppeteerModule.forRoot({
      isGlobal: true,
      pipe: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
