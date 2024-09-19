type AgentName = "productManager" | "designer" | "techLead" | "programmer";

export const getSlackSigningSecretByAgentName = (
  agentName: AgentName,
): string | undefined => {
  switch (agentName) {
    case "productManager":
      return process.env.GENIE_PRODUCTMANAGER_AGENT_SLACK_SIGNING_SECRET;
    case "designer":
      return process.env.GENIE_DESIGNER_AGENT_SLACK_SIGNING_SECRET;
    case "techLead":
      return process.env.GENIE_TECHLEAD_AGENT_SLACK_SIGNING_SECRET;
    case "programmer":
      return process.env.GENIE_PROGRAMMER_AGENT_SLACK_SIGNING_SECRET;
    default:
      console.error(`No signing secret found for agent: ${agentName}`);
      return undefined;
  }
};
