import { Module } from '@nestjs/common';
import { configProviders } from './config.provider';

@Module({
  providers: [...configProviders],
  exports: [...configProviders],
})
export class ConfigModule {}
