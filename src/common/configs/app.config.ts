import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: process.env.PORT ?? 3005,
  host: process.env.HOST ?? 'localhost',
}));