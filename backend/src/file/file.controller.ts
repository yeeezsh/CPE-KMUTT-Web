import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateFileDto } from './@dtos/file.create.dto';
import { FileService } from './file.service';
import { FileCreateType } from './@interfaces/file.create.interface';
import { FileNotExistsException } from '../common/Exception/file-error.exception';

@Controller('file')
export class FileController {
  constructor(private filesService: FileService) {}

  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: CreateFileDto,
  })
  upload(@UploadedFile() file: FileCreateType) {
    return {
      message: 'File has been Uploaded',
      file: file,
    };
  }

  @Get('/:id')
  async getFile(@Param('id') id: string, @Res() res: Response) {
    const file = await this.filesService.findInfo(id);
    const filestream = await this.filesService.readStream(id);
    if (!filestream) {
      throw new FileNotExistsException();
    }
    res.header('Content-Type', file.contentType);
    res.header(
      'Content-Disposition',
      `name=${file.filename}; filename=${file.filename}`,
    );
    return filestream.pipe(res);
  }

  @Get('/download/:id')
  async downloadFile(@Param('id') id: string, @Res() res: Response) {
    const file = await this.filesService.findInfo(id);
    const filestream = await this.filesService.readStream(id);

    if (!filestream) {
      throw new FileNotExistsException();
    }
    res.header('Content-Type', file.contentType);
    res.header('Content-Disposition', 'attachment; filename=' + file.filename);
    return filestream.pipe(res);
  }

  @Delete('/:id')
  async deleteFile(@Param('id') id: string): Promise<CreateFileDto> {
    const file = await this.filesService.findInfo(id);
    const filestream = await this.filesService.deleteFile(id);
    if (!filestream) {
      throw new FileNotExistsException();
    }
    return {
      message: 'File has been deleted',
      file: file,
    };
  }
}
