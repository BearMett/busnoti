import { Module } from '@nestjs/common';
import { ConfigService } from './config.provider';

@Module({
  providers: [ConfigService],
})
export class ConfigModule {}
