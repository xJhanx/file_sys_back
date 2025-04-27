import { IsEmail,IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({
    message : 'El nombre debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message : 'El nombre no puede estar vacío',
  })
  name: string;

  @IsString({
    message : 'El apellido debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message : 'El apellido no puede estar vacío',
  })
  last_name: string;

  @IsString({
    message : 'La contraseña debe ser una cadena de texto',
  })
  password: string;

  @IsEmail({}, {
    message : 'El email no es valido',
  })
  email: string;

  @IsOptional()
  refresh_token: string;
}