import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class JiraService {
  private readonly logger = new Logger(JiraService.name);

  processEvent(payload: Record<string, unknown>): void {
    this.logger.log('Jira Webhook Payload:');
    console.log(JSON.stringify(payload, null, 2));
    const webhookEvent = (payload as any).webhookEvent;
    if (webhookEvent) {
      this.logger.log(`Event Type: ${webhookEvent}`);
    } else {
      this.logger.warn('No webhookEvent field found');
    }
  }
}
