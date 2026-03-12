import { useEffect, useRef, type FC } from "react";
import type { IMessage } from "../../../../../../types/message";
import { MessagesWrapper } from "./styled";
import { Message } from "./components/Message";

interface IProps {
  messages: IMessage[];
}

export const Messages: FC<IProps> = ({
  messages
}) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    requestAnimationFrame(() => {
      const lastMessage = container.lastElementChild as HTMLElement;
      if (lastMessage) {
        lastMessage.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }
    });
  }, [messages.length]);

  return (
    <MessagesWrapper ref={messagesContainerRef}>
      {messages.slice().reverse().map((message) => (<Message key={message.message_id} message={message}/>))}
    </MessagesWrapper>
  );
}