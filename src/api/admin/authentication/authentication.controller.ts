import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from 'src/services/authentication/authentication.service';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('login')
  login(@Body() data: any) {
    return this.authenticationService.login(data);
  }
  @Post('register')
  register(@Body() data: any) {
    return this.authenticationService.register(data);
  }
}
