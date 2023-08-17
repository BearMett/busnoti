import { Module } from '@nestjs/common';
import { XmlParser } from './xml2js.provider';

@Module({
  providers: [XmlParser],
})
export class xmlParserModule {}
