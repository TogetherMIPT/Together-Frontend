import { FC, useCallback } from "react";
import type { IChat } from "../../../../types/chat";
import { Text } from "../../../../components/Text";
import { useNavigate } from "react-router";
import { StyledWrapper } from "./styled";
import { DeleteButton } from "../../../../components/DeleteButton";
import { useDeleteChat } from "../../../../hooks/data/useDeleteChat";

interface IProps {
  chat: IChat;
}

export const Chat: FC<IProps> = ({ chat }) => {
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteChat();

  const handleClick = () => {
    navigate(`/chat/${chat.chat_id}`)
  }

  const onDelete = useCallback(() => {
    if (chat?.chat_id) {
      mutateAsync(+chat.chat_id)
    }
  }, [chat?.chat_id])

  return <StyledWrapper onClick={handleClick}>
    <Text>{chat.chat_name}</Text>
    <DeleteButton onClick={onDelete} />
  </StyledWrapper>
}