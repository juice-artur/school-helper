import { Inject, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigType } from '@nestjs/config';
import config from '../config/appconfig';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(config.KEY)
    private readonly configObject: ConfigType<typeof config>,
  ) {}

  async sendverificationMail(verificationToken: string, email: string) {
    const confirmation_url = `${this.configObject.FRONTEND_URL}/registration/?token=${verificationToken}`;
    await this.mailerService.sendMail({
      to: email,
      from: '"Support Team" <support@example.com>',
      subject: 'Welcome to SchoolHelper! Confirm your Email',
      template: './teacher-activate-account',
      context: {
        confirmation_url,
      },
    });
  }
}
