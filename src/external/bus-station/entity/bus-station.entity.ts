import { WGS84Coordinate } from './coordinate.entity';

export class BusStation {
  stationId: number;
  stationName: string;
  coordinate: WGS84Coordinate;
  distanceMeter: number;

  getPosition(): WGS84Coordinate {
    return this.coordinate;
  }
}
