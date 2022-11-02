import { Injectable } from '@nestjs/common';
import {
  PuppeteerModuleOptions,
  PuppeteerOptionsFactory,
} from 'nest-puppeteer';

@Injectable()
export class ConfigService implements PuppeteerOptionsFactory {
  public readonly launchOptions = {
    pipe: true,
  };

  createPuppeteerOptions(): PuppeteerModuleOptions {
    return {
      launchOptions: this.launchOptions,
    };
  }
}
