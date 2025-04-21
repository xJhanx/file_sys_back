import {DataSourceOptions } from 'typeorm';
import { envs } from '../../../config/envs';

export const typeOrmConfig : DataSourceOptions = {
  host: envs.DB_HOST,
  type: "mysql",
  port: envs.DB_PORT,
  username: envs.DB_USER,
  password: envs.PWD_MYSQL_ROOT,
  database: envs.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  logging: true
};