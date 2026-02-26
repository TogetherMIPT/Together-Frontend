import { useFetchChats } from "../../hooks/data/useFetchChats";
import { Chat } from "./components/Chat";
import { PageWrapper } from "./styled";
import { Header } from "./components/Header";
import { Button } from "../Profile/styled";
import { useCreateChat } from "../../hooks/data/useCreateChat";

export const Chats = () => {
  const { data = [] } = useFetchChats();
  const { mutate } = useCreateChat();

  return (
    <PageWrapper>
      <Header />
      <Button onClick={mutate}>Новый чат</Button>
      {data.map((chat) => (<Chat key={chat.chat_id} chat={chat}/>))}
    </PageWrapper>
  );
}