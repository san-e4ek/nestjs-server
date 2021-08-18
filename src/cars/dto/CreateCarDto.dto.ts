import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateCarDto {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly model: string;
  @Field(() => Int)
  readonly year: number;
}
