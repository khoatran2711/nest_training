import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DeviceDocument = Device & Document;

@Schema({ timestamps: true })
export class Device {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true, unique: true })
  OwnerID: string;
}
export const DeviceSchema = SchemaFactory.createForClass(Device);
