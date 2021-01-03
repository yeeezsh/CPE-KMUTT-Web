import { Test, TestingModule } from '@nestjs/testing';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { DatabaseModule } from './../database/database.module';
import { DATABASE_CONNECTION } from '../database/constants/database.constant';
import { mockDatabaseFactory, replSet } from '../utils/database.factory';
import * as mongoose from 'mongoose';

describe('FileController test', () => {
  let controller: FileController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [FileController],
      providers: [FileService],
    })
      .overrideProvider(DATABASE_CONNECTION)
      .useFactory({
        factory: async () => mockDatabaseFactory(),
      })
      .compile();

    controller = module.get<FileController>(FileController);
  });
  afterAll(async () => {
    await module.close();
    await mongoose.disconnect();
    await replSet.stop();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
