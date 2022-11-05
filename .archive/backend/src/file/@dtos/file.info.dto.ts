import { ApiProperty } from '@nestjs/swagger';

export class FileInfoDto {
  @ApiProperty()
  length: number;

  @ApiProperty()
  chunkSize: number;

  @ApiProperty()
  filename: string;

  @ApiProperty()
  md5: string;

  @ApiProperty()
  contentType: string;
}
