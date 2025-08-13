import {IsNotEmpty, IsNumber, IsString, Validator } from 'class-validator';

export class CreateProductDto extends Validator {
  @IsString({
    message: 'El nombre del producto debe ser una cadena de texto',
  })
  name: string;

  @IsString({
    message: 'La descripción del producto debe ser una cadena de texto',
  })
  description: string;

  @IsNumber(
    { allowNaN: false },
    {
      message: 'El precio del producto debe ser un número',
    }
  )
  price: number;

  @IsNumber(
    { allowNaN: false },
    {
      message: 'El stock del producto debe ser un número',
    }
  )
  stock: number;

  @IsNumber(
    { allowNaN: false },
    {
      message: 'La categoría del producto es requerida',
    }
  )
  category_id: number;


  @IsNotEmpty({
    message: 'La fecha de expiración del producto no puede estar vacía',
  })
  expires_at: string;
}
