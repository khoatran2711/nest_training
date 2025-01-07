import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication/authentication.service';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { DeviceService } from './device/device.service';

@Module({
  imports: [RepositoriesModule],
  providers: [AuthenticationService, DeviceService],
  exports: [AuthenticationService],
})
export class ServicesModule {}
