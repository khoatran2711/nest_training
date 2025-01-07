import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable({})
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: any) {}

  async createUser(data: any) {
    return await this.userModel.create(data);
  }
  async findAllUser(filter?: any) {
    return await this.userModel.find(filter);
  }
  async findUserByID(id: string) {
    return await this.userModel.findById(id);
  }
  async findUserByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }
  async updateUser(id: string, data: any) {
    return await this.userModel.findByIdAndUpdate(id, data);
  }
  async deleteUser(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
