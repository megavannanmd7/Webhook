import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GithubService {
  private readonly logger = new Logger(GithubService.name);

  processEvent(eventType: string, payload: Record<string, unknown>): void {
    this.logger.log(`🐙 GitHub Event Received: ${eventType}`);
    this.logger.debug('📦 Payload:', payload);

    // Example: Handle push events
    if (eventType === 'push') {
      this.logger.log(`🟢 Push by: ${(payload?.pusher as any)?.name}`);
      this.logger.log(`📁 Repo: ${(payload?.repository as any)?.full_name}`);
    }
  }
}
