import { IsDefined, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsDefined()
  @IsString({
    message : 'El nombre debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message : 'El nombre no puede estar vacío',
  })
  name: string;

  @IsOptional()
  @IsString({
    message : 'El apellido debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message : 'El apellido no puede estar vacío',
  })
  last_name: string;

  @IsOptional()
  @IsString({
    message : 'La contraseña debe ser una cadena de texto',
  })
  password: string;

  @IsOptional()
  @IsEmail({}, {
    message : 'El email no es valido',
  })
  email: string;

  @IsOptional()
  @IsOptional()
  refresh_token: string;
}