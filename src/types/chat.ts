import type { IMessage } from "./message";

export interface IChat {
  chat_id: string;
  chat_name: string;
  creation_datetime: string;
  user_id: string;
  is_active: string;
}

export interface IRenameChatBody {
  chat_name: string;
}

export interface IChatsResponse {
  chats: IChat[];
  total: number;
}

export interface IChatResponse {
  limit: number;
  messages: IMessage[]
  offset: number;
  total: number;
}