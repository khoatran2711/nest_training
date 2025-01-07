import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication/authentication.controller';
import { ServicesModule } from 'src/services/services.module';
import { DeviceController } from './device/device.controller';

@Module({
  imports: [ServicesModule],
  controllers: [AuthenticationController, DeviceController],
})
export class AdminModule {}
