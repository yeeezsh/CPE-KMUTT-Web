import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import mongoose from 'mongoose';
import request from 'supertest';
import { Types } from 'mongoose';
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

  //upload file
  describe('FileController POST /file', () => {
    //jpeg
    it('should upload jpeg', async () => {
      const res = await request(app.getHttpServer())
        .post(`/file`)
        .set('Content-Type', 'multipart/form-data')
        .attach('file', `${__dirname}/data/bear.jpeg`);
      expect(res.status).toEqual(201);
      expect(res.body.message).toBe('File has been Uploaded');
      expect(res.body.file.filename).toBe('bear.jpeg');
      expect(res.body.file.contentType).toBe('image/jpeg');
      expect(res.body.file.size).toBe(7658);
    });

    //png
    it('should upload png', async () => {
      const res = await request(app.getHttpServer())
        .post(`/file`)
        .set('Content-Type', 'multipart/form-data')
        .attach('file', `${__dirname}/data/brown-bear.png`);
      expect(res.status).toEqual(201);
      expect(res.body.message).toBe('File has been Uploaded');
      expect(res.body.file.filename).toBe('brown-bear.png');
      expect(res.body.file.contentType).toBe('image/png');
      expect(res.body.file.size).toBe(214318);
    });

    //pdf
    it('should upload pdf', async () => {
      const res = await request(app.getHttpServer())
        .post(`/file`)
        .set('Content-Type', 'multipart/form-data')
        .attach('file', `${__dirname}/data/test.pdf`);
      expect(res.status).toEqual(201);
      expect(res.body.message).toBe('File has been Uploaded');
      expect(res.body.file.filename).toBe('test.pdf');
      expect(res.body.file.contentType).toBe('application/pdf');
      expect(res.body.file.size).toBe(0);
    });
  });

  //get file
  describe('FileController GET /file/:id', () => {
    let id: Types.ObjectId;

    //init id for query
    beforeAll(async () => {
      const file = await request(app.getHttpServer())
        .post(`/file`)
        .set('Content-Type', 'multipart/form-data')
        .attach('file', `${__dirname}/data/bear.jpeg`);
      id = file.body.file.id;
    });

    //image found
    it('should get image', async () => {
      const res = await request(app.getHttpServer()).get(`/file/${id}`);
      expect(res.status).toEqual(200);
      expect(res.header).toHaveProperty('content-disposition');
    });

    //image not found
    it('should not get image', async () => {
      const res = await request(app.getHttpServer()).get(
        `/file/5ff1874142edb00029c5011`,
      );
      expect(res.status).toEqual(404);
      expect(res.body.message).toBe('File not found');
      expect(res.header).not.toHaveProperty('content-disposition');
    });
  });

  //download file
  describe('FileController GET /file/download/:id', () => {
    let id: Types.ObjectId;

    //init id for query
    beforeAll(async () => {
      const file = await request(app.getHttpServer())
        .post(`/file`)
        .set('Content-Type', 'multipart/form-data')
        .attach('file', `${__dirname}/data/bear.jpeg`);
      id = file.body.file.id;
    });

    //image found
    it('should download image', async () => {
      const res = await request(app.getHttpServer()).get(
        `/file/download/${id}`,
      );
      expect(res.status).toEqual(200);
      expect(res.header).toHaveProperty('content-disposition');
    });

    //can not download image
    it('should not download image', async () => {
      const res = await request(app.getHttpServer()).get(
        `/file/download/5ff1874142edb00029c50112`,
      );
      expect(res.status).toEqual(404);
      expect(res.body.message).toBe('File not found');
      expect(res.header).not.toHaveProperty('content-disposition');
    });
  });

  //delete file
  describe('FileController DELETE /file/:id', () => {
    let id: Types.ObjectId;
    let filename: string;
    let length: number;
    let chunkSize: number;
    let md5: number;
    let contentType: string;

    //init id for query
    beforeAll(async () => {
      const file = await request(app.getHttpServer())
        .post(`/file`)
        .set('Content-Type', 'multipart/form-data')
        .attach('file', `${__dirname}/data/bear.jpeg`);
      id = file.body.file.id;
      filename = file.body.file.filename;
      length = file.body.file.size;
      chunkSize = file.body.file.chunkSize;
      md5 = file.body.file.md5;
      contentType = file.body.file.contentType;
    });

    //image found
    it('should delete image', async () => {
      const res = await request(app.getHttpServer()).delete(`/file/${id}`);
      expect(res.status).toEqual(200);
      expect(res.body.message).toBe('File has been deleted');
      expect(res.body.file.filename).toBe(filename);
      expect(res.body.file.length).toBe(length);
      expect(res.body.file.chunkSize).toBe(chunkSize);
      expect(res.body.file.md5).toBe(md5);
      expect(res.body.file.contentType).toBe(contentType);
    });

    //can not found image
    it('should not delete image', async () => {
      const res = await request(app.getHttpServer()).delete(
        `/file/5ff1874142edb00029c50113`,
      );
      expect(res.status).toEqual(404);
      expect(res.body.message).toBe('File not found');
    });
  });
});
