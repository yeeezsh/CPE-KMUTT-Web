import { Inject, Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import * as GridFsStorage from 'multer-gridfs-storage';

Injectable();
export class GridFsMulterConfigService implements MulterOptionsFactory {
  gridFsStorage: GridFsStorage;
  constructor(@Inject('DATABASE_CONNECTION') private readonly db: any) {
    this.gridFsStorage = new GridFsStorage({
      db: this.db,
      file: (_req: any, file: { originalname: string }) => {
        return file.originalname;
      },
    });
  }

  createMulterOptions(): MulterModuleOptions {
    return {
      storage: this.gridFsStorage,
    };
  }
}
