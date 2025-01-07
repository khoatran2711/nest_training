import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  login(data: any) {
    console.log('login', data);
    return 'login';
  }
}
