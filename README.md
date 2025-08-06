# 🔔 Webhook Listener with NestJS

A lightweight, scalable webhook listener built using [NestJS](https://nestjs.com).  
This project receives, validates, and processes incoming webhooks from platforms like:

- [Slack](https://api.slack.com/apis)
- [GitHub](https://docs.github.com/en/webhooks)
- [Jira](https://developer.atlassian.com/cloud/jira/platform/webhooks/)

---

## 📦 What’s a Webhook?

A **webhook** is a way for apps to send real-time data to your server when certain events happen —  
e.g., a push on GitHub, a message in Slack, or a ticket update in Jira.

This project sets up endpoints to receive and process those events efficiently.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the server
npm run start:dev
```

---

## 📡 Webhook Endpoints

| Service | Endpoint              | Event Type Examples                |
| ------- | --------------------- | ---------------------------------- |
| Slack   | `POST /slack/events`  | `message`, `reaction_added`        |
| GitHub  | `POST /github/events` | `push`, `pull_request`, `issues`   |
| Jira    | `POST /jira/events`   | `issue_created`, `comment_created` |

---

## 🔐 GitHub Secret Signature Verification

To secure GitHub webhooks:

1. **Generate a secret** when setting up the webhook.
2. **Store** it in your `.env` or configuration file.
3. The app will verify all requests using the `x-hub-signature-256` header.

This prevents unauthorized spoofed payloads.

---

## 🧠 Processing Logic

Each service has its own handler inside the corresponding `*.service.ts` file:

- `SlackService.processEvent(...)`
- `GithubService.processEvent(...)`
- `JiraService.processEvent(...)`

These methods:

- Validate incoming payloads
- Log useful details (for debugging/monitoring)
- Can be extended to:
  - Store events in your database
  - Trigger downstream actions
  - Integrate with AI, notifications, analytics, etc.

---

## 🛠️ Roadmap

- [ ] Persistent DB event storage (PostgreSQL)
- [ ] Dashboard for viewing webhook logs
- [ ] Retry logic for failed webhooks
- [ ] Email/Slack alert for failed events
- [ ] Auto-documentation using Swagger

---

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e
```

---

## 🤝 Contributing

Pull requests are welcome! Feel free to open issues or feature requests too.

---

## 📄 License

MIT
