export interface MailerRepository {
  sendWelcomeEmail(to: string, subject: string): Promise<void>;
  sendRecoveryPasswordEmail(to: string, subject: string, link : string): Promise<void>;
  sendSuccessUpdatedPasswordEmail(to: string, subject: string): Promise<void>;
}