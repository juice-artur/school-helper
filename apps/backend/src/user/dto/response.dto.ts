import { Role } from '@prisma/client';
import { Exclude, Expose, Transform, plainToInstance } from 'class-transformer';

class RoleDTO {
  @Exclude()
  id: string;
  role: Role;
  @Exclude()
  userId: string;
}
export class ResponseUserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  googleId?: string;
  avatarKey?: string;
  isActive: boolean;
  schoolId?: string;
  @Expose()
  @Transform(({ value }) => {
    return plainToInstance(RoleDTO, value);
  })
  userRoles: string[];
}
