import { Controller, Post } from '@nestjs/common';
import { AuthenticationService } from 'src/modules/authentication/authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('login')
  login() {
    return this.authenticationService.login();
  }
}
