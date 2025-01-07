import { Injectable } from '@nestjs/common';
import { DeviceRepository } from 'src/repositories/device.repository';

@Injectable()
export class DeviceService {
  constructor(private readonly deviceRepository: DeviceRepository) {}

  async createDevice(data: any) {
    return await this.deviceRepository.createDevice(data);
  }
  async listDevice(filter?: any) {
    return await this.deviceRepository.findAllDevice(filter);
  }
  async updateDevice(data: any) {
    return await this.deviceRepository.updateDevice(data.id, data);
  }
  async deleteDevice(id: string) {
    return await this.deviceRepository.deleteDevice(id);
  }
}
