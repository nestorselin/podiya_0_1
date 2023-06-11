import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const data: any = dotenv.parse(fs.readFileSync(`.env`));

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: data.DB_USER,
  password: data.DB_PASSWORD,
  database: data.DB_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrationsRun: true,
  logging: false,
  logger: 'file',
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  extra: {
    charset: "utf8mb4_unicode_ci",
  },
};

