import { WelcomeTemplateData } from '../../mailer/interfaces/welcome.template.data';
import * as fs from 'fs';
import { SecurityCodeTemplateData } from '../../mailer/interfaces/security_code.template.data';

export class TemplateWelcomeParser {
  static parseWelcomeEmailTemplate(data: WelcomeTemplateData): string {
    const templateHtml = fs.readFileSync(
      './src/infraestructure/mailer/templates/welcome.user.html',
      'utf-8'
    );
    return templateHtml.replace(/{{name}}/g, data.name);
  }
}

export class TemplateRecoveryParser {
  static parseRecoveryEmailTemplate(data: SecurityCodeTemplateData): string {
    const templateHtml = fs.readFileSync(
      './src/infraestructure/mailer/templates/security_code.html',
      'utf-8'
    );
    return templateHtml.replace(/{{name}}/g, data.name).replace(/{{link}}/g, data.link);
  }
}

export class TemplatePasswordChangedParser {
  static parsePasswordChangedEmailTemplate(): string {
    return fs.readFileSync(
      './src/infraestructure/mailer/templates/success_update_password.html',
      'utf-8'
    );
  }
}
