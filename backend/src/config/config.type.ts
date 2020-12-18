import { ConfigEnum } from './config.enum';

export type ConfigType = {
  [key in ConfigEnum]: string;
};
