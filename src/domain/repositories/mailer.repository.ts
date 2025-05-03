export interface MailerRepository {
  sendEmail(to: string, subject: string, body: string): Promise<void>;

  //TODO implement the rest of the methods
  // sendEmailWithAttachment(
  //   to: string,
  //   subject: string,
  //   body: string,
  //   attachmentPath: string
  // ): Promise<void>;
  // sendBulkEmail(recipients: string[], subject: string, body: string): Promise<void>;
  // sendEmailWithTemplate(
  //   to: string,
  //   subject: string,
  //   templateName: string,
  //   context?: Record<string, any>
  // ): Promise<void>;
}