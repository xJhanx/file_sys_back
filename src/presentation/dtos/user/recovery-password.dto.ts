import { IsEmail, IsNotEmpty } from 'class-validator';

export class RecoveryPasswordDto {
  @IsNotEmpty({
    message: 'El correo electrónico es obligatorio',
  })
  @IsEmail(
    {},
    {
      message: 'El correo electrónico no es válido',
    }
  )
  email: string;

  @IsNotEmpty({
    message: 'La contraseña es obligatoria',
  })
  password: string;

  @IsNotEmpty({
    message: 'El token es obligatorio',
  })
  token: string;
}
