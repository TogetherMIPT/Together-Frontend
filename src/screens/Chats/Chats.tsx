import { useFetchChats } from "../../hooks/data/useFetchChats";
import { Chat } from "./components/Chat";
import { ContentWrapper, PageWrapper } from "./styled";
import { Header } from "./components/Header";
import { useCreateChat } from "../../hooks/data/useCreateChat";
import { Button } from "../../components/Button";

export const Chats = () => {
  const { data = [] } = useFetchChats();
  const { mutate } = useCreateChat();

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
      <Button onClick={mutate}>Новый чат</Button>
        {data.map((chat) => (<Chat key={chat.chat_id} chat={chat}/>))}
      </ContentWrapper>
    </PageWrapper>
  );
}