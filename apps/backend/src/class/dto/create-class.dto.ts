import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateClassDto {
  @ApiProperty({
    example: '11',
    description: 'Order',
  })
  @IsNotEmpty()
  order: string;
}
