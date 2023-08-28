import { PartialType } from '@nestjs/swagger';
import { CreateMemberServiceDto } from './create-member-service.dto';

export class UpdateMemberServiceDto extends PartialType(CreateMemberServiceDto) {}
