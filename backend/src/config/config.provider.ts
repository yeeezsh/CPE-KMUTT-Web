import { Provider } from '@nestjs/common';
import { ConfigurationInterface } from './@types/config.interface';
import { ConfigType } from './@types/config.type';
import { APP_CONFIG } from './config.constant';

export const configProviders: Provider[] = [
  {
    provide: APP_CONFIG,
    useValue: ((): ConfigurationInterface => {
      const {
        DATABASE_CONNECTION,
        DATABASE_USERAME,
        DATABASE_PASSWORD,
        DATABASE_AUTH_SOURCE,
        JWT_SECRET_KEY,
        JWT_EXPIRES,
        OPS_KEY,
        ORIGIN,
        PORT,
      } = process.env as ConfigType;
      return {
        database: {
          connection:
            DATABASE_CONNECTION ||
            'mongodb://mongodb-sharded:27017/cpe-kmutt-web',
          username: DATABASE_USERAME || 'root',
          password: DATABASE_PASSWORD || 'cpeKMUTT@WebSite',
          authSource: DATABASE_AUTH_SOURCE || 'admin',
        },
        jwt: {
          secretKey: JWT_SECRET_KEY || 'very-secret-key.jwt',
          expires: JWT_EXPIRES || '3600s',
        },
        opsKey: OPS_KEY || 'CPE-KMUTT.opskey',
        node_env:
          (process.env.NODE_ENV as ConfigurationInterface['node_env']) ||
          'development',
        origin: new RegExp(ORIGIN),
        port: Number(PORT) || 3000,
      };
    })(),
  },
];
