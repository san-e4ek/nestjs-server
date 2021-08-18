import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductsResolver } from './products.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
