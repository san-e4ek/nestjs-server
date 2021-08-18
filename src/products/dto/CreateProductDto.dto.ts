import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateProductDto {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly title: string;
  @Field(() => Int)
  readonly price: number;
}
