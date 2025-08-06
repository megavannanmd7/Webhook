import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SlackService {
  private readonly logger = new Logger(SlackService.name);

  processEvent(payload: Record<string, unknown>): void {
    this.logger.log('Raw Payload:');
    console.log(JSON.stringify(payload, null, 2));
    const event = (payload as any).event;
    if (event) {
      this.logger.log(`Event Type: ${event.type}`);
      this.logger.debug(`Event Payload: ${JSON.stringify(event, null, 2)}`);
    } else {
      this.logger.warn('No event field found in payload');
    }
  }
}
