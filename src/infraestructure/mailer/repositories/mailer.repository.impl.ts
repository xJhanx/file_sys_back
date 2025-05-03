import { MailerRepository } from '../../../domain/repositories/mailer.repository';
import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { TemplateEmailParser} from '../../services/utils/html.template.email.parser';

export class MailerRepositoryImpl  implements  MailerRepository{

  private readonly smtpTransportOptions : SMTPTransport.Options = {
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3eb49368a6b012",
      pass: "cfac73587e2613"
    }
  };

  private readonly  transporter = nodemailer.createTransport(this.smtpTransportOptions);

  async  sendEmail(to: string, subject: string, body: string): Promise<void> {
    try {
      const template : string  = TemplateEmailParser.parseWelcomeEmailTemplate({name: 'JHANCARLOS'});

      await this.transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to, // list of receivers
        subject , // Subject line
        //text: "Hello world?", // plain text body
        html: template, // html body
      });
    }catch (error) {
      console.error('Internal error sending email:', error);
    }
  }
}