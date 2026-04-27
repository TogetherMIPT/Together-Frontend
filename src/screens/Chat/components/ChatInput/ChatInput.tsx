import { useState, type FC, type KeyboardEventHandler } from 'react';
import {
  InputWrapper,
  MessageInput,
  SendButton
} from "./styled";

interface IProps {
  onSend: (message: string) => void;
  placeholder?: string;
}

export const ChatInput: FC<IProps> = ({ onSend, placeholder = "Сообщение..." }) => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleSend = () => {
    if (message.trim() || attachments.length > 0) {
      onSend(message.trim());
      setMessage('');
      setAttachments([]);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <InputWrapper>
        <MessageInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={1}
        />
      </InputWrapper>

      <SendButton
        onClick={handleSend}
        disabled={!message.trim() && attachments.length === 0}
        title="Отправить"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor"/>
        </svg>
      </SendButton>
    </>
  );
};
