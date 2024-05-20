import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { User } from 'src/model/user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });
console.log(process.env);
const config = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [User],
  migrations: ['./migrations/**/*.{.ts}'],
  synchronize: false,
};

export default registerAs('connectionSource', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
