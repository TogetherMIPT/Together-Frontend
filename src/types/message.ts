export interface IMessage {
  message_id: number;
  chat_id: number;
  created_at: string;
  message_text: string;
  is_from_user: boolean;
}

export interface IMessageRequestParams {
  chat_id: number;
  message: string;
}
