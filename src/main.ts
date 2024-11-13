import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import {} from 'process';
import { SocketIoAdapter } from './services/global/socket-io/socket-io.adapter';
import { Logger } from '@nestjs/common';

const port = 4000;
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: logger,
  });

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

  const redisAdapter = new SocketIoAdapter(app);
  redisAdapter.setLogger(logger);
  app.useWebSocketAdapter(redisAdapter);

  await app.listen(port, () => {
    console.log(`
    Server is running on port: ${port}
    Current Process ID: ${process.pid}
    `);
  });
}
bootstrap();
