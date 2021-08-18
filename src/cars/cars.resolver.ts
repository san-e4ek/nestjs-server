import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/CreateCarDto.dto';
import { CarInput } from './inputs/car.input';

@Resolver()
export class CarsResolver {
  constructor(private readonly CarsService: CarsService) {}

  @Query(() => [CreateCarDto])
  async getAllCars() {
    return this.CarsService.getAllCars();
  }

  @Mutation(() => CreateCarDto)
  async createCar(@Args('input') input: CarInput) {
    return this.CarsService.createCar(input);
  }
}
