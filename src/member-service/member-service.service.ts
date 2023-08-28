import { Injectable } from '@nestjs/common';
import { CreateMemberServiceDto } from './dto/create-member-service.dto';
import { UpdateMemberServiceDto } from './dto/update-member-service.dto';

@Injectable()
export class MemberServiceService {
  create(createMemberServiceDto: CreateMemberServiceDto) {
    return 'This action adds a new memberService';
  }

  findAll() {
    return `This action returns all memberService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberService`;
  }

  update(id: number, updateMemberServiceDto: UpdateMemberServiceDto) {
    return `This action updates a #${id} memberService`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberService`;
  }
}
