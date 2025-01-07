import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { DeviceService } from 'src/services/device/device.service';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post('create')
  createDevice(@Body() data: any) {
    return this.deviceService.createDevice(data);
  }
  @Get('list')
  listDevice(@Query() filter?: any) {
    return this.deviceService.listDevice(filter);
  }
  @Post('update')
  updateDevice(@Body() data: any) {
    return this.deviceService.updateDevice(data);
  }
  @Delete('delete')
  deleteDevice(@Query('id') id: string) {
    return this.deviceService.deleteDevice(id);
  }
}
