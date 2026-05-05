import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // CORS: aceita dev (localhost), preview (Vercel) e produção (espumaetex.com.br)
  const allowedOrigins: (string | RegExp)[] = [
    config.get<string>('WEB_URL', 'http://localhost:3000'),
    'http://localhost:3000',
    'https://www.espumaetex.com.br',
    'https://espumaetex.com.br',
    /\.vercel\.app$/,
  ];
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });

  // Swagger só em dev
  if (config.get('NODE_ENV') !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Espumatex API')
      .setDescription('API do e-commerce Espumatex (espumas, tecidos, fibras)')
      .setVersion('0.1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api/docs', app, document);
    logger.log(`📚 Swagger em http://localhost:${config.get('API_PORT', 3001)}/api/docs`);
  }

  // Em Railway/Heroku/etc o PORT é injetado dinamicamente; cai pra API_PORT em dev
  const port = parseInt(process.env.PORT || '', 10) || config.get<number>('API_PORT', 3001);
  await app.listen(port, '0.0.0.0');
  logger.log(`🚀 API rodando na porta ${port} (prefixo /api)`);
}

bootstrap();
