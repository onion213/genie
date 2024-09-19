import { Hono } from "hono";
import { verifySlackRequest } from "@/src/interfaces/middleware/verifySlackRequest";
import { SlackService } from "@/src/infrastructure/SlackService";
import logger from "@/src/shared/utils/logger";
import { AgentRole } from "@/src/domain/value-objects/AgentRole";

const slackEventController = new Hono();

// Define the route for Slack events
slackEventController.post("/", verifySlackRequest(), async (c) => {
  logger.info("requested");
  const payload = await c.req.json();
  const agentRole = c.req.query("agentRole") as AgentRole;

  if (!agentRole) {
    console.error("TODO");
    return c.text("AgentRole was not given", 404);
  }

  console.log(`handle payload.type. ${payload.type}`);

  // Handle URL verification challenge
  if (payload.type === "url_verification") {
    console.info(`Requested by ${agentRole}`);
    return c.json({ challenge: payload.challenge });
  }

  // Handle event_callback
  if (payload.type === "event_callback") {
    const event = payload.event;

    // Handle mention
    if (event.type === "app_mention") {
      console.info(`mentioned. do parroting`);
      const text = event.text;
      const channel = event.channel;
      const thread_ts = event.ts;
      logger.info("Is this called twice?");
      const slackService = new SlackService();
      slackService.sendMessage(text, agentRole, channel, thread_ts);
      return c.text("ok", 200);
    }
  }

  return c.text("Invalid type", 404);
});

export default slackEventController;
