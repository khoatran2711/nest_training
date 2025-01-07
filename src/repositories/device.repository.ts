import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DeviceRepository {
  constructor(@InjectModel('Device') private readonly deviceModel: any) {}
  async createDevice(data: any) {
    return await this.deviceModel.create(data);
  }
  async findAllDevice(filter?: any) {
    return await this.deviceModel.find(filter);
  }
  async findDeviceByID(id: string) {
    return await this.deviceModel.findById(id);
  }
  async findDeviceByUser(userID: string) {
    return await this.deviceModel.find({ OwnerID: userID });
  }
  async updateDevice(id: string, data: any) {
    return await this.deviceModel.findByIdAndUpdate(id, data);
  }
  async deleteDevice(id: string) {
    return await this.deviceModel.findByIdAndDelete(id);
  }
}
