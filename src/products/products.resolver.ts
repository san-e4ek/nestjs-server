import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/CreateProductDto.dto';
import { ProductInput } from './inputs/product.input';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [CreateProductDto])
  getAllProducts() {
    return this.productsService.getAll();
  }

  @Query(() => CreateProductDto)
  getOne(@Args('id', { type: () => String }) id: string) {
    return this.productsService.getById(id);
  }

  @Mutation(() => CreateProductDto)
  createProduct(@Args('input') input: ProductInput) {
    return this.productsService.create(input);
  }

  @Mutation(() => CreateProductDto)
  removeProduct(@Args('id', { type: () => String }) id: string) {
    return this.productsService.remove(id);
  }

  // @Mutation(() => CreateProductDto)
  // update(@Args('input') input: ProductInput) {
  //   return this.productsService.update(input.id, input);
  // }
}
