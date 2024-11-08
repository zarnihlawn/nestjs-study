import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );
  app.enableCors({
    origin: 'http://localhost:4200',
    // methods: methods,
    credentials: true,
  });

  await app.listen(port, () => {
    console.log(`
    ⚡️ Nest Application is running!
    ⚡️ Open http://localhost:${port}/ in your browser.
    `);
  });
}
bootstrap();
