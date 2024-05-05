import { PartialType, OmitType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['password', 'email'] as const),
) {
  @ApiProperty({
    example: 'user-avatar-12345',
    description: 'S3 key for user avatar image',
  })
  @IsOptional()
  @IsString()
  avatarKey?: string;
}
