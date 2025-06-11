import { MailerRepository } from '../../../domain/repositories/mailer.repository';
import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import {
  TemplatePasswordChangedParser,
  TemplateRecoveryParser,
  TemplateWelcomeParser,
} from '../../services/utils/html.template.email.parser';

export class MailerRepositoryImpl implements MailerRepository {
  private readonly smtpTransportOptions: SMTPTransport.Options = {
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '3eb49368a6b012',
      pass: 'cfac73587e2613',
    },
  };

  private readonly transporter = nodemailer.createTransport(this.smtpTransportOptions);

  async sendWelcomeEmail(to: string, subject: string): Promise<void> {
    try {
      const template: string = TemplateWelcomeParser.parseWelcomeEmailTemplate({
        name: 'JHANCARLOS',
      });

      await this.transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to,
        subject,
        html: template,
      });
    } catch (error) {
      console.error('Internal error sending email:', error);
    }
  }

  async sendRecoveryPasswordEmail(to: string, subject: string, link: string): Promise<void> {
    try {
      const template: string = TemplateRecoveryParser.parseRecoveryEmailTemplate({
        name: 'JHANCARLOS',
        link,
      });

      await this.transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to,
        subject,
        html: template,
      });
    } catch (error) {
      console.error('Internal error sending email:', error);
    }
  }

  async sendSuccessUpdatedPasswordEmail(to: string, subject: string): Promise<void> {
    try {
      const template: string = TemplatePasswordChangedParser.parsePasswordChangedEmailTemplate();
      await this.transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to,
        subject,
        html: template,
      });
    } catch (error) {
      console.error('Internal error sending email:', error);
    }
  }
}
