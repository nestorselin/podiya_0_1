import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";

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

  // const options = new DocumentBuilder()
  //   .setTitle('NestJS Role Based Auth Starter')
  //   .setVersion("0.1")
  //   .build();

  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('docs', app, document);
  const port = process.env.PORT || 3005;
  await app.listen(port);

  return port;
}

bootstrap().then(port => console.log(`App successfully started on port ${port} !`));