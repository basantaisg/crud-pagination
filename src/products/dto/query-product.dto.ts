import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class QueryProductDto {
  @IsOptional()
  @IsNumberString()
  page?: string;

  @IsOptional()
  @IsNumberString()
  limit?: string;

  @IsOptional()
  @IsNumberString()
  minPrice?: string;

  @IsOptional()
  @IsNumberString()
  maxPrice?: string;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  sortBy?: 'price' | 'createdAt';

  @IsOptional()
  @IsString()
  order?: 'asc' | 'desc';
}
