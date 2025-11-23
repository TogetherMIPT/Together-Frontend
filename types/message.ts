export interface IMessage {
  message_id: string;
  chat_id: string;
  creation_datetime: string;
  message_text: string;
  sender: 'user' | 'assistant';
}
