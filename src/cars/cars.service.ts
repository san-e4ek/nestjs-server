import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schemas/car.schema';
import { Model } from 'mongoose';
import { CarInput } from './inputs/car.input';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private readonly CarModel: Model<Car>) {}

  async getAllCars(): Promise<Car[]> {
    return this.CarModel.find().exec();
  }

  async createCar(createdCarDto: CarInput): Promise<Car> {
    const newCar = new this.CarModel(createdCarDto);
    return newCar.save();
  }
}
