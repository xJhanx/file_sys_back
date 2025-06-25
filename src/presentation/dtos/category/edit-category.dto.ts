import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsOptional()
  @IsNotEmpty({ message: 'Si envías el nombre, no puede estar vacío' })
  @IsString()
  name?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Si envías la descripción, no puede estar vacía' })
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Si envías el código, debe ser un número' })
  code?: number;
}
