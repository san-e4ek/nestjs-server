import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CarInput {
  @Field()
  readonly model: string;
  @Field(() => Int)
  readonly year: number;
}
