import { Module } from '@nestjs/common';
import { DeviceRepository } from 'src/repositories/device.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { ShcemasModule } from 'src/shcemas/shcemas.module';

@Module({
  imports: [ShcemasModule],
  providers: [UserRepository, DeviceRepository],
  exports: [UserRepository, DeviceRepository],
})
export class RepositoriesModule {}
