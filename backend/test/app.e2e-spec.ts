import { Test, TestingModule } from '@nestjs/testing';
import mongoose from 'mongoose';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { DATABASE_CONNECTION } from '../src/database/constants/database.constant';
import { mockDatabaseFactory, replSet } from '../src/utils/database.factory';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(DATABASE_CONNECTION)
      .useFactory({
        factory: async () => await mockDatabaseFactory(),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await replSet.stop();
    await app.close();
  });

  it('/ (GET)', () =>
    request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!'));
});
