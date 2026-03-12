import type { FC } from "react";
import { useParams } from "react-router";

import { useFetchChatById } from "../../hooks/data/useFetchChatById";
import { PageWrapper, StyledChatWrapper, StyledTextInputWrapper } from "./styled";

import { ChatInput } from "./components/ChatInput";
import { BackButton } from "../../components/BackButton";
import { useSendMessage } from "../../hooks/data/useSendMessage";
import { Content } from "./components/Content";

export const Chat: FC = () => {
  const { chat_id } = useParams<{ chat_id: string }>();

  const { data = [] } = useFetchChatById(chat_id);
  const { mutate } = useSendMessage(chat_id);

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
        <Content messages={data} />
      </StyledChatWrapper>
      <StyledTextInputWrapper>
        <ChatInput onSend={sendMessage} />
      </StyledTextInputWrapper>
    </PageWrapper>
  );
}
