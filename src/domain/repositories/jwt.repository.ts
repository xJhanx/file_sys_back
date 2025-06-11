import { StatusToken } from '../../infraestructure/interfaces/jwt/statusToken.interface';

export interface  JwtRepository {
  generateAccessToken(payload: object): string;
  generateTemporalToken(payload: object): string;
  validateToken(token: string): StatusToken
}