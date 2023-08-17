import { Module } from '@nestjs/common';
import { BusStopProvider } from './stop.provider';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [BusStopProvider],
})
export class StopsModule {}
