import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as mongoose from 'mongoose';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { DATABASE_CONNECTION } from '../src/database/constants/database.constant';
import {
  mockDatabaseFactory,
  replSet,
} from '../src/utils/database.factory';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }) .overrideProvider(DATABASE_CONNECTION)
    .useFactory({
      factory: async () => mockDatabaseFactory(),
    })
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
    await mongoose.disconnect();
    await replSet.stop();
  });



  it('/ (GET)', () =>
    request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!'));
});
