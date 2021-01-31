import { BadRequestException, NotFoundException } from '@nestjs/common';

export class FileNotExistsException extends BadRequestException {
  constructor() {
    super('An error occurred while retrieving file');
  }
}

export class FileNotFound extends NotFoundException {
  constructor() {
    super('File not found');
  }
}
