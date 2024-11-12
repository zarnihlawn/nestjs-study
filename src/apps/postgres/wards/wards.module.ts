import { Module } from '@nestjs/common';
import { WardsService } from './wards.service';
import { WardsController } from './wards.controller';
import { Ward } from './entities/ward.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WardsGateway } from './wards.gateway';
import { WardsAdminGateway } from './ward-admin.gateway';

@Module({
  controllers: [WardsController],
  providers: [WardsService, WardsGateway, WardsAdminGateway],
  imports: [TypeOrmModule.forFeature([Ward])],
})
export class WardsModule {}
