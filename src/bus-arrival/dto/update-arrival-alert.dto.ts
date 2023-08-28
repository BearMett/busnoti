import { PartialType } from '@nestjs/mapped-types';
import { CreateStopDto } from './create-arrival-alert.dto';

export class UpdateStopDto extends PartialType(CreateStopDto) {}
