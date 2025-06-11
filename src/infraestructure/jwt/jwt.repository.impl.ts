import { JwtRepository } from '../../domain/repositories/jwt.repository';
import * as jwt from 'jsonwebtoken';

import { Injectable } from '@nestjs/common';
import { envs } from '../../config/envs';
import { StatusToken } from '../interfaces/jwt/statusToken.interface';

@Injectable()
export class JwtRepositoryImpl implements JwtRepository {
  generateAccessToken<T extends string | object | Buffer>(payload: T): string {
    const options: any = {
      expiresIn: envs.JWT_EXPIRATION_SESSION,
    };
    return jwt.sign(payload, envs.JWT_SECRET, options);
  }

  generateTemporalToken<T extends string | object | Buffer>(pyload: T): string {
    const options: any = {
      expiresIn: envs.JWT_EXPIRATION_TEMPORAL,
    };
    return jwt.sign(pyload, envs.JWT_SECRET, options);
  }

  validateToken(token: string): StatusToken  {
    try {
      jwt.verify(token, envs.JWT_SECRET);
      return {
        isValid : true,
        error: null
      }
    } catch (error) {
      return {
        isValid: false,
        error: error instanceof Error ? error.message : "Unknown error"
      };
    }
  }
}
