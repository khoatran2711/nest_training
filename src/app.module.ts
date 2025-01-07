import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AdminModule } from './api/admin/admin.module';
import { CustomerModule } from './api/customer/customer.module';
import { CommonModule } from './api/common/common.module';
import { RouterModule } from '@nestjs/core';
import { RepositoriesModule } from './repositories/repositories.module';
import { ServicesModule } from './services/services.module';
import { ShcemasModule } from 'src/shcemas/shcemas.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    AdminModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
      },
    ]),
    CustomerModule,
    RouterModule.register([
      {
        path: 'customer',
        module: CustomerModule,
      },
    ]),
    CommonModule,
    RouterModule.register([{ path: 'common', module: CommonModule }]),
    RepositoriesModule,
    ServicesModule,
    ShcemasModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
