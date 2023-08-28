import { Module } from '@nestjs/common';
import { StopsService } from './arrival.service';
import { StopsController } from './arrival.controller';

@Module({
  controllers: [StopsController],
  providers: [StopsService],
})
export class StopsModule {}
