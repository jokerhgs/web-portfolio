"use server";
import { aiChatRepository } from "../_repositories/ai-chat-repository";

export const sendMessage = async (message: string) => {
  try {
    const data = await aiChatRepository.sendMessage(message);
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw error;
  }
};
