import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CarController } from './cars.controller';
import { carProviderToken } from './tokens/cars.provider-token';
import { CarService } from './cars.service';
import { carProvider } from './providers/cars.provider';

@Module({
  imports: [ DatabaseModule ],
  controllers: [ CarController ],
  providers: [
    {
      provide: carProviderToken,
      useClass: CarService,
    }, 
    carProvider,
  ],
})
export class CarModule {}