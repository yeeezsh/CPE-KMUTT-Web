import { Inject, Injectable } from '@nestjs/common';
import { MongoGridFS } from 'mongo-gridfs';
import { GridFSBucketReadStream } from 'mongodb';
import { FileInfoDto } from './@dtos/file.info.dto';
import { DATABASE_CONNECTION } from '../database/constants/database.constant';
import { FileNotFound } from '../common/Exception/file-error.exception';

@Injectable()
export class FileService {
  private fileModel: MongoGridFS;

  constructor(@Inject(DATABASE_CONNECTION) private readonly db: any) {
    const connect = this.db.connections[0].db;
    this.fileModel = new MongoGridFS(connect, 'fs');
  }

  async readStream(id: string): Promise<GridFSBucketReadStream> {
    return await this.fileModel.readFileStream(id);
  }

  async findInfo(id: string): Promise<FileInfoDto> {
    try {
      const result = await this.fileModel.findById(id);
      return {
        filename: result.filename,
        length: result.length,
        chunkSize: result.chunkSize,
        md5: result.md5,
        contentType: result.contentType,
      };
    } catch (err) {
      throw new FileNotFound();
    }
  }

  async deleteFile(id: string): Promise<boolean> {
    return await this.fileModel.delete(id);
  }
}
