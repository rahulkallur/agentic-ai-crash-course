import { Mastra } from "@mastra/core";
import { personalAssistant } from "./agents/personalAssistant";

export const mastra = new Mastra({
  agents: { PersonalAssistant: personalAssistant },
});
