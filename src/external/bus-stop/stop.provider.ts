import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class BusStopProvider {
  constructor(private readonly httpService: HttpService) {}

  async sendHttpRequest() {
    const param = {
      serviceKey: 'USE_OWN',
      keyword: '이마트정문',
    };
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `https://apis.data.go.kr/6410000/busstationservice/getBusStationList?serviceKey=${param.serviceKey}&keyword=${param.keyword}`,
          { params: param },
        )
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw new Error(JSON.stringify(error));
          }),
        ),
    );
    return data;
  }
}
