import { Module } from '@nestjs/common';
import { PuppeteerModule } from 'nest-puppeteer';
import { ExtractController } from './extract.controller';
import { ExtractService } from './extract.service';
import { ConfigModule } from './pptr-config/pptr-config.module';
import { ConfigService } from './pptr-config/pptrConfig.service';

@Module({
  imports: [
    PuppeteerModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService,
    }),
  ],
  controllers: [ExtractController],
  providers: [ExtractService],
})
export class ExtractModule {}
