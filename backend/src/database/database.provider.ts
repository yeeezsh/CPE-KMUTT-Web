import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { ConfigurationInterface } from '../config/@types/config.interface';
import { DATABASE_CONNECTION } from './constants/database.constant';

export const databaseProviders: Provider[] = [
  {
    inject: ['APP_CONFIG'],
    provide: DATABASE_CONNECTION,
    useFactory: async (
      AppConfig: ConfigurationInterface,
    ): Promise<typeof mongoose> => {
      return await mongoose.connect(AppConfig.database.connection, {
        user: AppConfig.database.username,
        pass: AppConfig.database.password,
        authSource: AppConfig.database.authSource,
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
    },
  },
];
