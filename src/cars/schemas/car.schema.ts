import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  model: string;

  @Prop()
  year: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
