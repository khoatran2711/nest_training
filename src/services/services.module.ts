import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication/authentication.service';
import { RepositoriesModule } from 'src/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class ServicesModule {}
