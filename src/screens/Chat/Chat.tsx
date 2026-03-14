import type { FC } from "react";
import { useParams } from "react-router";

import { useFetchChatById } from "../../hooks/data/useFetchChatById";
import { PageWrapper, StyledChatWrapper, StyledTextInputWrapper } from "./styled";

import { ChatInput } from "./components/ChatInput";
import { HomeButton } from "../../components/HomeButton";
import { useSendMessage } from "../../hooks/data/useSendMessage";
import { Content } from "./components/Content";
import { useCreateChatAndSendMessage } from "../../hooks/data/useCreateChatAndSendMessage";

export const Chat: FC = () => {
  const { chat_id } = useParams<{ chat_id?: string }>();

  const { data = [] } = useFetchChatById(chat_id);
  const createAndSend = useCreateChatAndSendMessage();
  const { mutate } = useSendMessage();

  const sendMessage = (message: string) => {
    if (chat_id === undefined) {
      createAndSend(message);
    } else {
      mutate({
        message,
        chat_id: +chat_id,
      });
    }
  }

  return (
    <PageWrapper>
      <HomeButton/>
      <StyledChatWrapper>
        <Content messages={data} />
      </StyledChatWrapper>
      <StyledTextInputWrapper>
        <ChatInput onSend={sendMessage} />
      </StyledTextInputWrapper>
    </PageWrapper>
  );
}
