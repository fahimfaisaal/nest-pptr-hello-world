import { Injectable } from '@nestjs/common';
import { InjectPage } from 'nest-puppeteer';
import { Page } from 'puppeteer';

@Injectable()
export class ExtractService {
  constructor(@InjectPage() private readonly page: Page) {}

  async getTitle(url: string): Promise<string> {
    await this.page.goto(url, { waitUntil: 'networkidle2' });
    return this.page.title();
  }
}
