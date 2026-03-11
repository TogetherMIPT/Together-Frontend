import { useEffect, useRef, type FC } from "react";
import { useParams } from "react-router";

import { useFetchChatById } from "../../hooks/data/useFetchChatById";
import { MessagesWrapper, PageWrapper, StyledChatWrapper, StyledTextInputWrapper } from "./styled";
import { Message } from "./components/Message";
import { ChatInput } from "./components/ChatInput";
import { BackButton } from "../../components/BackButton";
import { useSendMessage } from "../../hooks/data/useSendMessage";

export const Chat: FC = () => {
  const { chat_id } = useParams<{ chat_id: string }>();
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const { data = [] } = useFetchChatById(chat_id);
  const { mutate } = useSendMessage(chat_id);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container || data.length === 0) return;

    requestAnimationFrame(() => {
      const lastMessage = container.lastElementChild as HTMLElement;
      if (lastMessage) {
        lastMessage.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }
    });
  }, [data.length]);

  const sendMessage = (message: string) => {
    if (chat_id !== undefined) {
      mutate({
        message,
        chat_id: +chat_id,
      });
    }
  }

  return (
    <PageWrapper>
      <BackButton/>
      <StyledChatWrapper>
        <MessagesWrapper ref={messagesContainerRef}>
          {data.slice().reverse().map((message) => (<Message key={message.message_id} message={message}/>))}
        </MessagesWrapper>
      </StyledChatWrapper>
      <StyledTextInputWrapper>
        <ChatInput onSend={sendMessage} />
      </StyledTextInputWrapper>
    </PageWrapper>
  );
}
