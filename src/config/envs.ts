import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
  PORT: env.get('PORT').required().default(3000).asInt(),
  DB_TYPE: env.get('DB_TYPE').required().default('mysql').asString(),
  DB_PORT: env.get('DB_PORT').required().default(3306).asInt(),
  DB_HOST: env.get('DB_HOST').required().default('localhost').asString(),
  DB_NAME: env.get('DB_NAME').required().asString(),
  DB_USER: env.get('DB_USER').required().default('root').asString(),
  DB_PASSWORD: env.get('DB_PASSWORD').asString(),
  PWD_MYSQL_ROOT: env.get('PWD_MYSQL_ROOT').asString(),
  JWT_SECRET : env.get('JWT_SECRET').required().asString(),
  JWT_EXPIRATION_SESSION : env.get('JWT_EXPIRATION_SESSION').required().asString(),
  JWT_EXPIRATION_TEMPORAL : env.get('JWT_EXPIRATION_TEMPORAL').required().asString(),
  JWT_SALT : env.get('JWT_SALT').required().default(10).asInt(),
}