import { WebClient } from "@slack/web-api";
import { getSlackTokenByAgentRole } from "@/src/shared/utils/getSlackSecretByAgentRole";
import { AgentRole } from "../domain/value-objects/AgentRole";

/**
 * SlackService handles sending messages to Slack channels or users.
 */
export class SlackService {
  /**
   * Sends a message to a Slack channel or user.
   * @param text The text message to send.
   * @param agent The agent performing the action.
   * @param channel The Slack channel ID. If not provided, uses the default channel.
   */
  async sendMessage(
    text: string,
    agentRole: AgentRole,
    channel: string,
    thread_ts: string | undefined = undefined,
  ): Promise<void> {
    const slackToken = getSlackTokenByAgentRole(agentRole);
    console.log(`using ${slackToken}`);
    console.log({ channel });
    console.log({ thread_ts });

    const web = new WebClient(slackToken);

    try {
      const result = await web.chat.postMessage({
        channel,
        text,
        thread_ts,
      });
      console.log(
        `Message sent by ${agentRole}: ${text}. result: ${JSON.stringify(result.ok)}`,
      );
    } catch (error) {
      console.error(`Failed to send message via Slack: ${error}`);
    }
  }
}
