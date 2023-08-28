import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ConfigService } from 'src/common/config/config.provider';

@Injectable()
export class BusStopProvider {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async sendHttpRequest() {
    const param = {
      serviceKey: this.configService.getApiKey(),
      keyword: '이마트정문',
    };

    const url = `https://apis.data.go.kr/6410000/busstationservice/getBusStationList?serviceKey=${param.serviceKey}&keyword=${param.keyword}`;
    console.log(url);
    const { data } = await firstValueFrom(
      this.httpService.get(url, { params: param }).pipe(
        catchError((error: AxiosError) => {
          console.log(error.response.data);
          throw new Error(JSON.stringify(error));
        }),
      ),
    );
    return data;
  }
}
