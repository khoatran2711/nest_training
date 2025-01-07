import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication/authentication.controller';
import { ServicesModule } from 'src/services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [AuthenticationController],
})
export class AdminModule {}
