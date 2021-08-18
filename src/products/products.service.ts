import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { ProductInput } from './inputs/product.input';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModule: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModule.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModule.findById(id);
  }

  async create(productDto: ProductInput): Promise<Product> {
    const newProduct = new this.productModule(productDto);
    return newProduct.save();
  }

  async remove(id: string): Promise<Product> {
    return this.productModule.findByIdAndRemove(id);
  }

  async update(id: string, productDto: ProductInput): Promise<Product> {
    return this.productModule.findByIdAndUpdate(id, productDto, { new: true });
  }
}
