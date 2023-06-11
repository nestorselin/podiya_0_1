import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const serviceAccount = require("../service-account.json");

async function bootstrap() {
  process.env.TZ = "UTC";
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.set('trust proxy', 1);

  //app.useGlobalPipes(new ValidationPipe());

  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount),
  // });

  const config = new DocumentBuilder()
    .setTitle('Podiya')
    .setDescription('The podiya API description')
    .setVersion('1.0')
    .addTag('podiya')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 3005;
  await app.listen(port);

  return port;
}

bootstrap().then(port => console.log(`App successfully started on port ${port}!`));