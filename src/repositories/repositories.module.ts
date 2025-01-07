import { Module } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.repository';
import { ShcemasModule } from 'src/shcemas/shcemas.module';

@Module({
  imports: [ShcemasModule],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class RepositoriesModule {}
