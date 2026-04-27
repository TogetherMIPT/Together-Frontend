import { useCallback, type FC } from "react";
import { useParams } from "react-router";

import { useFetchChatById } from "../../hooks/data/useFetchChatById";
import { PageWrapper, StyledChatWrapper, StyledTextInputWrapper, InputContainer } from "./styled";

import { ChatInput } from "./components/ChatInput";
import { useSendMessage } from "../../hooks/data/useSendMessage";
import { Content } from "./components/Content";
import { useCreateChatAndSendMessage } from "../../hooks/data/useCreateChatAndSendMessage";
import { HeaderControls } from "../../components/HeaderControls";

export const Chat: FC = () => {
  const { chat_id } = useParams<{ chat_id?: string }>();

  const { data = [] } = useFetchChatById(chat_id);
  const { createAndSend } = useCreateChatAndSendMessage();
  const { mutate } = useSendMessage();

  const sendMessage = useCallback((message: string) => {
    if (chat_id === undefined) {
      createAndSend(message);
    } else {
      mutate({
        message,
        chat_id: +chat_id,
      });
    }
  }, [chat_id, mutate, createAndSend])

  return (
    <PageWrapper>
      <HeaderControls/>
      <StyledChatWrapper>
        <Content messages={data} />
      </StyledChatWrapper>
      <StyledTextInputWrapper>
        <InputContainer>
          <ChatInput onSend={sendMessage} />
        </InputContainer>
      </StyledTextInputWrapper>
    </PageWrapper>
  );
}
