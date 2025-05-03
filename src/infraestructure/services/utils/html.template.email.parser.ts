import { WelcomeTemplateData } from '../../mailer/interfaces/welcome.template.data';
import * as fs from 'fs';

export class TemplateEmailParser {
  static parseWelcomeEmailTemplate(data: WelcomeTemplateData): string {
    const templateHtml = fs.readFileSync(
      './src/infraestructure/mailer/templates/welcome.user.html',
      'utf-8'
    );
    return templateHtml.replace(/{{name}}/g, data.name);
  }
}
