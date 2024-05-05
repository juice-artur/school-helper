import { registerAs } from '@nestjs/config';
import { validate } from './utils';
import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';

class BaseConfig {
  @Expose()
  @IsString()
  FRONTEND_URL: string;
}

export default registerAs('app_config', () => {
  return validate(BaseConfig);
});
