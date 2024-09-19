// src/handlers/slackEvents.ts
import type { Context } from "hono";

export const handleSlackEvents = async (c: Context) => {
  const body = (c as any).rawBody;
  const payload = JSON.parse(body);

  if (payload.type === "url_verification") {
    // Respond to Slack's URL verification challenge
    return c.json({ challenge: payload.challenge });
  }

  if (payload.type === "event_callback") {
    const event = payload.event;

    // Handle different event types
    if (event.type === "app_mention") {
      // Example: Respond to app mentions
      // You can implement bot-specific logic here
      return c.text("Hello! I am Genie.");
    }

    // Add more event handlers as needed
  }

  return c.text("Event received", 200);
};
