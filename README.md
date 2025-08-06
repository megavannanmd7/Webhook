# 🔔 Webhook Listener with NestJS

A lightweight, scalable webhook listener built using [NestJS](https://nestjs.com). This project receives, validates, and processes incoming webhooks from platforms like:

- [Slack](https://api.slack.com/apis)
- [GitHub](https://docs.github.com/en/webhooks)
- [Jira](https://developer.atlassian.com/cloud/jira/platform/webhooks/)

---

## 📦 What’s a Webhook?

A webhook is a way for apps to send real-time data to your server when certain events happen (e.g., a push on GitHub, a message in Slack, or a ticket update in Jira). This project sets up endpoints to receive and process those events.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the server
npm run start:dev

📡 Webhook Endpoints
| Service | Endpoint              | Event Type Example                 |
| ------- | --------------------- | ---------------------------------- |
| Slack   | `POST /slack/events`  | `message`, `reaction`              |
| GitHub  | `POST /github/events` | `push`, `pull_request`             |
| Jira    | `POST /jira/events`   | `issue_created`, `comment_created` |

🔐 GitHub Secret Signature Verification
To secure GitHub webhooks:

Generate a secret during webhook setup.

Add it to your .env or config file.

The app will verify using x-hub-signature-256 header.

🧠 Processing Logic
Each service has its own handler inside the corresponding *.service.ts file:

SlackService.processEvent(...)

GithubService.processEvent(...)

JiraService.processEvent(...)

These methods:

Validate incoming events

Log useful details

Can be extended to store events in DB or trigger actions