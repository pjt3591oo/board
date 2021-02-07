require('dotenv').config()

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(SwaggerModule, DocumentBuilder)
  const config = new DocumentBuilder()
    .setTitle('Board APIs Documentation')
    .setDescription('The Boards API description')
    .setVersion('1.0')
    .addTag('boards')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
