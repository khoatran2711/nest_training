import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceSchema } from 'src/shcemas/device.schema';
import { UserSchema } from 'src/shcemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Device', schema: DeviceSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class ShcemasModule {}
