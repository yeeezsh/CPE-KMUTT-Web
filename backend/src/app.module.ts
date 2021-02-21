import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
<<<<<<< HEAD

@Module({
  imports: [ConfigModule],
=======
import { DatabaseModule } from './database/database.module';
import { AppResolver } from './app.resolver';
import { FileModule } from './file/file.module';
@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    FileModule
  ],
>>>>>>> c2d74df6a9a845d96c163ed0377882c81f3b2b90
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
