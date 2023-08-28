import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StopsService } from './arrival.service';
import { CreateStopDto } from './dto/create-arrival-alert.dto';
import { UpdateStopDto } from './dto/update-arrival-alert.dto';

@Controller('stops')
export class StopsController {
  constructor(private readonly stopsService: StopsService) {}

  @Post()
  create(@Body() createStopDto: CreateStopDto) {
    return this.stopsService.create(createStopDto);
  }

  @Get('home')
  findAll() {
    return 'aa';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stopsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStopDto: UpdateStopDto) {
    return this.stopsService.update(+id, updateStopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stopsService.remove(+id);
  }
}
