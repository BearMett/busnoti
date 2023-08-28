import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberServiceService } from './member-service.service';
import { CreateMemberServiceDto } from './dto/create-member-service.dto';
import { UpdateMemberServiceDto } from './dto/update-member-service.dto';

@Controller('member-service')
export class MemberServiceController {
  constructor(private readonly memberServiceService: MemberServiceService) {}

  @Post()
  create(@Body() createMemberServiceDto: CreateMemberServiceDto) {
    return this.memberServiceService.create(createMemberServiceDto);
  }

  @Get()
  findAll() {
    return this.memberServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberServiceDto: UpdateMemberServiceDto) {
    return this.memberServiceService.update(+id, updateMemberServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberServiceService.remove(+id);
  }
}
