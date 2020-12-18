import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';
import { ConfigurationInterface } from './config/config.interface';
import { ConfigModule } from './config/config.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('CPE KMUTT API')
    .setVersion('1.0')
    .build();

  const config: ConfigurationInterface = app
    .select(ConfigModule)
    .get('APP_CONFIG');

  app.enableCors({
    origin: [config.origin],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(config.port);
  Logger.log(`Server started on port ${config.port}`);
}
bootstrap();
