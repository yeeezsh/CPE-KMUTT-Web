import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
@Module({
  imports: [ConfigModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
