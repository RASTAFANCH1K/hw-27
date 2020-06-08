import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { carModelToken } from './tokens/cars.model-token';
import { Model } from 'mongoose';
import { ICar } from './interfaces/cars.interface';

@Injectable()
export class CarService {
  constructor(@Inject(carModelToken) private readonly carModel: Model<ICar>) {}

  public addCar(car: ICar) {
    return this.carModel.create(car);
  }

  public async getCarById(id: string) {
    const car = await this.carModel.findOne( { _id: id } ).lean().exec();

    if (!car) throw new BadRequestException(`Car with following id: ${id} does not exist`);
    
    return car;
  }

  public getAllCars() {
    return this.carModel.find().lean().exec();
  }
}