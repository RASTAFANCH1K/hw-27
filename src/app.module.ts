import { Module } from '@nestjs/common';
import { CarModule } from './cars/cars.module';
import { UserModule } from './users/users.module';
import { ConfigModule } from './config/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ CarModule, UserModule, ConfigModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
