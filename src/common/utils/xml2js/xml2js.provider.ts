import { Injectable } from '@nestjs/common';
import * as xml2js from 'xml2js';

@Injectable()
export class XmlParser {
  parseXmlToObjectPromise(xmlString: string): Promise<any> {
    const parser = new xml2js.Parser({
      explicitArray: false,
      mergeAttrs: true,
    });
    const result = parser.parseStringPromise(xmlString);
    return result;
  }
}
