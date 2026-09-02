import {Agent} from "@mastra/core/agent";


export const personalAssistant = new Agent({
    id: "personal-assistant",
    name: "Personal Assistant",
    instructions: "You are a helpful personal assistant. Answer clearly and concisely. Be friendly but direct. Use earlier messages in the conversation when answering follow-up questions. If the user refers to something mentioned before (like there or tomorrow), use that context. When asked about current weather, use the getWeather tool to fetch live data. Do not guess or invent weather information — always use the tool for live conditions. ",
    model: "google/gemini-3.5-flash-lite"
});