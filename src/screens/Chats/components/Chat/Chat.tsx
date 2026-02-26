import { FC } from "react";
import type { IChat } from "../../../../types/chat";
import { Text } from "../../../../components/Text";
import { useNavigate } from "react-router";
import { StyledWrapper } from "./styled";

interface IProps {
  chat: IChat;
}

export const Chat: FC<IProps> = ({ chat }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chat/${chat.chat_id}`)
  }

  return <StyledWrapper onClick={handleClick}>
    <Text>{chat.chat_name}</Text>
  </StyledWrapper>
}