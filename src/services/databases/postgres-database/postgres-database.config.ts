// import { join } from 'path';
// import { AppEnvValues } from 'src/resources/env/app.env';
import { DataSourceOptions } from 'typeorm';

export const postgresDatabaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: '10.0.233.121',
  port: 5432,
  username: 'postgres',
  password: 'Amo@phh123',
  database: 'dev-zn',

  entities: ['./dist/apps/postgres/**/*.entity.js'],

  synchronize: true,
};
