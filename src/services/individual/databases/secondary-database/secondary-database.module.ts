import { Module } from '@nestjs/common';
import { SecondaryDatabaseService } from './secondary-database.service';

@Module({
  providers: [SecondaryDatabaseService],
})
export class SecondaryDatabaseModule {}
