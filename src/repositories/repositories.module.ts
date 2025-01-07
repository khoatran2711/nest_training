import { Module } from '@nestjs/common';
import { ShcemasModule } from 'src/shcemas/shcemas.module';

@Module({
  imports: [ShcemasModule],
})
export class RepositoriesModule {}
