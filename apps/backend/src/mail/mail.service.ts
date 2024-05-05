import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail() {
    try {
      await this.mailerService.sendMail({
        to: 'school.helper@gmail.com',
        from: '"Welcome to the fold" <linux@over.windows>',
        subject: 'Quotes',
        text: '',
        html: `<p>How many programmers does it take to change a light bulb? 
               None, that’s a hardware problem.</p>`,
      });
      return {
        success: true,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
      };
    }
  }
}
