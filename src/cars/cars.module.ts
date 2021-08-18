import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schemas/car.schema';
import { CarsService } from './cars.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  providers: [CarsResolver, CarsService],
})
export class CarsModule {}
