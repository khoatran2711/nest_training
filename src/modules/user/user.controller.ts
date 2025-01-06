import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}
  @Get('list')
  filterUsers(@Query() query: any) {
    return `filterUsers: ${JSON.stringify(query)}`;
  }
  @Get(':id')
  getUser(@Param('id') id: string) {
    return 'getUser: ' + id;
  }
  @Post('create')
  createUser(@Body() body: any) {
    console.log(body.name);
    return 'createUser: ' + JSON.stringify(body);
  }
}
