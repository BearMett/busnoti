import { Module } from '@nestjs/common';
import { MemberServiceService } from './member-service.service';
import { MemberServiceController } from './member-service.controller';

@Module({
  controllers: [MemberServiceController],
  providers: [MemberServiceService]
})
export class MemberServiceModule {}
