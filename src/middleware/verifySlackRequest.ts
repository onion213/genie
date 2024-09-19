import crypto from "crypto";
// src/middleware/verifySlackRequest.ts
import type { Context, Next } from "hono";
import { getSlackSigningSecretByAgentName } from "../utils/getSlackSecretByAgentName";

//TODO: define types in one place
type AgentName = "productManager" | "designer" | "techLead" | "programmer";
export const verifySlackRequest = () => {
  return async (c: Context, next: Next) => {
    const timestamp = c.req.header("X-Slack-Request-Timestamp");
    const slackSignature = c.req.header("X-Slack-Signature");
    const agentName = c.req.param()["agentName"] as AgentName;

    if (!timestamp || !slackSignature) {
      return c.text("Bad Request", 400);
    }

    // Prevent replay attacks
    const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 60 * 5;
    if (Number.parseInt(timestamp) < fiveMinutesAgo) {
      return c.text("Request timestamp is too old", 400);
    }

    const signingSecret = getSlackSigningSecretByAgentName(agentName);
    if (!signingSecret) {
      console.error("Slack Signing Secret is not set.");
      return c.text("Internal Server Error", 500);
    }

    const body = await c.req.text();
    const sigBasestring = `v0:${timestamp}:${body}`;
    const mySignature = `v0=${crypto.createHmac("sha256", signingSecret).update(sigBasestring).digest("hex")}`;

    // Use timingSafeEqual to prevent timing attacks
    const bufferSlack = Buffer.from(slackSignature, "utf8");
    const bufferMy = Buffer.from(mySignature, "utf8");

    if (
      bufferSlack.length !== bufferMy.length ||
      !crypto.timingSafeEqual(bufferSlack, bufferMy)
    ) {
      return c.text("Invalid signature", 400);
    }

    // Attach raw body for further processing
    (c as any).rawBody = body;

    await next();
  };
};
