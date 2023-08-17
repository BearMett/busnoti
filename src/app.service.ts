import { Injectable } from '@nestjs/common';
import { BusStopProvider } from './external/bus-stop/stop.provider';
import { XmlParser } from './common/utils/xml2js/xml2js.provider';

@Injectable()
export class AppService {
  constructor(
    private readonly busStopProvider: BusStopProvider,
    private readonly xmlParser: XmlParser,
  ) {}
  async getHello(): Promise<any> {
    const ret = await this.busStopProvider.sendHttpRequest();

    return await this.xmlParser.parseXmlToObjectPromise(ret);
  }
}
