import { Module } from '@nestjs/common';
import { ConfigService } from './pptrConfig.service';

@Module({
  imports: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
