import { Module } from '@nestjs/common';
import { BusStopProvider } from './bus-station.provider';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from 'src/common/config/config.module';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [BusStopProvider],
})
export class BusStationModule {}
