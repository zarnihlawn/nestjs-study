import { Module } from '@nestjs/common';
import { WardsService } from './wards.service';
import { WardsController } from './wards.controller';
import { Ward } from './entities/ward.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [WardsController],
  providers: [WardsService],
  imports: [TypeOrmModule.forFeature([Ward])],
})
export class WardsModule {}
