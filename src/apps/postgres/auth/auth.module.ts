import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/apps/main/users/users.module';
import { UsersService } from 'src/apps/main/users/users.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UsersModule]
})
export class AuthModule {}
