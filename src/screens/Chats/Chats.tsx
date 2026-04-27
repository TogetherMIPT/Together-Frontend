import { useNavigate } from "react-router";

import { useFetchChats } from "../../hooks/data/useFetchChats";
import { Chat } from "./components/Chat";
import { ContentWrapper, PageWrapper } from "./styled";
import { Header } from "./components/Header";
import { Button } from "../../components/Button";

export const Chats = () => {
  const { data = [] } = useFetchChats();
  const navigate = useNavigate();

  const navigateToNewChat = () => {
    navigate('/chat/');
  };

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
      <Button onClick={navigateToNewChat}>Новый чат</Button>
        {data.map((chat) => (<Chat key={chat.chat_id} chat={chat}/>))}
      </ContentWrapper>
    </PageWrapper>
  );
}