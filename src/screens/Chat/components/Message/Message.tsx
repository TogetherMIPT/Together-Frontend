import { type FC, type PropsWithChildren } from "react";
import type { IMessage } from "../../../../types/message";
import { IncomingMessage, OutgoingMessage, MessageContent, MessageTime } from "./styled";

interface IProps {
  message: IMessage;
}

// Компонент сообщения
export const Message: FC<IProps> = ({
  message
}) => {
  const {
    message_text,
    created_at,
    is_from_user,
  } = message;

  const displayTime = new Date(created_at).toLocaleTimeString();

  const MessageWrapper: FC<PropsWithChildren<{isOutgoing: boolean}>> = is_from_user ? OutgoingMessage : IncomingMessage;

  return (
    <MessageWrapper isOutgoing={is_from_user}>
      <MessageContent>
        {message_text}
      </MessageContent>
      <MessageTime>{displayTime}</MessageTime>
    </MessageWrapper>
  );
};
