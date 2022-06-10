import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const options = new DocumentBuilder().setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, options);

  const port = process.env.YOUR_PORT || process.env.PORT || 3000;
  const host = process.env.YOUR_HOST || '0.0.0.0';

  SwaggerModule.setup('api', app, document);
  app.setGlobalPrefix('api');
  await app.listen(port, host, ()=>{
    console.log('Listening on port %d', port);
  });
}
bootstrap();
