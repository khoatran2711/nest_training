import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userRepository: UserRepository) {}
  login(data: any) {
    console.log('login', data);
    return 'login';
  }
  register(data: any) {
    this.userRepository.createUser(data);
    return { status: 'success', data: [] };
  }
}
