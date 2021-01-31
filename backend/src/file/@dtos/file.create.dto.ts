import { ApiProperty } from '@nestjs/swagger';
import { FileInfoDto } from './file.info.dto';
export class CreateFileDto {
  @ApiProperty()
  message: string;
  @ApiProperty({ type: FileInfoDto })
  file: FileInfoDto;
}
