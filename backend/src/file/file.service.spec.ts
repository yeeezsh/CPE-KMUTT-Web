import { Test, TestingModule } from '@nestjs/testing';
import { FileService } from './file.service';
import { DatabaseModule } from './../database/database.module';
import { DATABASE_CONNECTION } from '../database/constants/database.constant';
import { mockDatabaseFactory, replSet } from '../utils/database.factory';
import mongoose from 'mongoose';

describe('FileService test', () => {
  let service: FileService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [FileService],
    })
      .overrideProvider(DATABASE_CONNECTION)
      .useFactory({
        factory: async () => await mockDatabaseFactory(),
      })
      .compile();

    service = module.get<FileService>(FileService);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await replSet.stop();
    await module.close();
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });
});
