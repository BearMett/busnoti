import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusStopProvider } from './external/bus-stop/stop.provider';
import { HttpModule } from '@nestjs/axios';
import { XmlParser } from './common/utils/xml2js/xml2js.provider';

@Module({
  controllers: [AppController],
  providers: [AppService, BusStopProvider, XmlParser],
  imports: [HttpModule],
})
export class AppModule {}
