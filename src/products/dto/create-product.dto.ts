import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Title must be string!' })
  @MinLength(3, { message: 'Title must be 3 letter long!' })
  title: string;

  @IsString({ message: 'Description must be string!' })
  @MinLength(5, { message: 'Description must be minimum 5 letter long' })
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString({ message: 'Must be string' })
  category: string;
}
