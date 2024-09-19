import { AgentRole } from "@/src/domain/value-objects/AgentRole";

export const getSlackSigningSecretByAgentRole = (
  agentRole: AgentRole,
): string | undefined => {
  switch (agentRole) {
    case "ProductManager":
      return process.env.GENIE_PRODUCT_MANAGER_AGENT_SLACK_SIGNING_SECRET;
    case "Designer":
      return process.env.GENIE_DESIGNER_AGENT_SLACK_SIGNING_SECRET;
    case "TechLead":
      return process.env.GENIE_TECH_LEAD_AGENT_SLACK_SIGNING_SECRET;
    case "Programmer":
      return process.env.GENIE_PROGRAMMER_AGENT_SLACK_SIGNING_SECRET;
    default:
      console.error(`No signing secret found for agent: ${agentRole}`);
      return undefined;
  }
};

export const getSlackTokenByAgentRole = (
  agentRole: AgentRole,
): string | undefined => {
  switch (agentRole) {
    case "ProductManager":
      return process.env.GENIE_PRODUCT_MANAGER_AGENT_SLACK_BOT_USER_OAUTH_TOKEN;
    case "Designer":
      return process.env.GENIE_DESIGNER_AGENT_SLACK_BOT_USER_OAUTH_TOKEN;
    case "TechLead":
      return process.env.GENIE_TECH_LEAD_AGENT_SLACK_BOT_USER_OAUTH_TOKEN;
    case "Programmer":
      return process.env.GENIE_PROGRAMMER_AGENT_SLACK_BOT_USER_OAUTH_TOKEN;
    default:
      console.error(`No token found for agent: ${agentRole}`);
      return undefined;
  }
};

export const getSlackBotIdByAgentRole = (
  agentRole: AgentRole,
): string | undefined => {
  switch (agentRole) {
    case "ProductManager":
      return process.env.GENIE_PRODUCT_MANAGER_AGENT_SLACK_BOT_ID;
    case "Designer":
      return process.env.GENIE_DESIGNER_AGENT_SLACK_BOT_ID;
    case "TechLead":
      return process.env.GENIE_TECH_LEAD_AGENT_SLACK_BOT_ID;
    case "Programmer":
      return process.env.GENIE_PROGRAMMER_AGENT_SLACK_BOT_ID;
    default:
      console.error(`No bot ID found for agent: ${agentRole}`);
      return undefined;
  }
};
