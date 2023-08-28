import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusStopProvider } from './external/bus-station/bus-station.provider';
import { HttpModule } from '@nestjs/axios';
import { XmlParser } from './common/utils/xml2js/xml2js.provider';
import { ConfigModule } from './common/config/config.module';
import { ConfigService } from './common/config/config.provider';
import { StopsModule } from './bus-arrival/arrival.module';
import { MemberServiceModule } from './member-service/member-service.module';

@Module({
  controllers: [AppController],
  providers: [AppService, BusStopProvider, XmlParser, ConfigService],
  imports: [HttpModule, ConfigModule, StopsModule, MemberServiceModule],
})
export class AppModule {}
