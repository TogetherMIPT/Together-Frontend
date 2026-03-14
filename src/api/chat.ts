import type { IChatResponse, IChatsResponse } from "../types/chat";
import api from "../utils/api";

export const getAllChats = (userId: number) => api.get<IChatsResponse>(`/api/chats/${userId}`);

export const getChatMessages = (chatId: string) => api.get<IChatResponse>(`/api/msg_batch/${chatId}`);

export const createChat = (userId: number) => api.post(`/api/chat/${userId}`);

export const deleteChat = (chatId: number) => api.delete(`/api/chat/${chatId}`);
