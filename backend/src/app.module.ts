import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { FileModule } from './file/file.module';
@Module({
  imports: [ConfigModule, DatabaseModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
