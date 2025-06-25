import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({
    message: 'El nombre de la categoría es obligatorio',
  })
  name: string;

  @IsNotEmpty({
    message: 'La descripción de la categoría es obligatoria',
  })
  description: string;

  @IsNumber(
    {
      allowNaN: false,
    },
    {
      message: 'El código de la categoría debe ser un número',
    }
  )
  @IsOptional()
  code?: number; // Optional field, can be undefined
}
