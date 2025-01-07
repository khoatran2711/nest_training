import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userRepository: UserRepository) {}
  login(data: any) {
    console.log('login', data);
    return 'login';
  }
  async register(data: any) {
    const currentUser = await this.userRepository.findUserByEmail(data.email);
    if (currentUser) {
      return { status: 'error', message: 'User already exists' };
    }
    this.userRepository.createUser(data);
    return { status: 'success', data: [] };
  }
}
