import { Controller, Inject, Get, Param, Post, Body } from '@nestjs/common';
import { carProviderToken } from './tokens/cars.provider-token';
import { CarService } from './cars.service';
import { ICar } from './interfaces/cars.interface';

@Controller('cars')
export class CarController {
  constructor(@Inject(carProviderToken) public carService: CarService) {}

  @Post('add') // http://localhost:3000/cars/add
  public addCar(@Body() body: ICar ) {
    return this.carService.addCar(body);
  }

  @Get(':id') // http://localhost:3000/cars/id
  public getCar(@Param('id') id: string ) {
    return this.carService.getCarById(id);
  }

  @Get() // http://localhost:3000/cars
  public getAllCars() {
    return this.carService.getAllCars();
  }
}