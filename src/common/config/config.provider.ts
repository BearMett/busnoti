import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly config: Record<string, string>;

  constructor() {
    const configFile = fs.readFileSync(
      '/Users/gpc/work/nestjs/busnoti/busnoti/config.json',
      'utf-8',
    );
    this.config = JSON.parse(configFile);
    console.log(this.config);
  }

  getApiKey(): string {
    return this.config.API_KEY;
  }

  getDatabaseUrl(): string {
    return this.config.database_url;
  }
}
