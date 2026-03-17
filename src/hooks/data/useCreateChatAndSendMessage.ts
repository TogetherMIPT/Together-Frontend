import { useCallback } from "react";
import { useCreateChat } from "./useCreateChat";
import { useSendMessage } from "./useSendMessage"
import { useNavigate } from "react-router";
import { useDeleteChat } from "./useDeleteChat";
import { useRenameChat } from "./useRenameChat";

export const useCreateChatAndSendMessage = () => {
  const navigate = useNavigate();
  const { mutateAsync: sendMessage, isPending: isPendingSend } = useSendMessage();
  const { mutateAsync: createChat, isPending: isPendingCreate } = useCreateChat();
  const { mutateAsync: deleteChat, isPending: isPendingDelete } = useDeleteChat();
  const { mutateAsync: renameChat } = useRenameChat();

  const createAndSend = useCallback(async (message: string) => {
    const chatResponse = await createChat();
    
    const chat_id = +chatResponse?.data?.chat_id
    try {
      await sendMessage({
        message,
        chat_id,
      });

      renameChat({
        chatId: chat_id,
        body: { chat_name: message }
      })

      navigate(`/chat/${chat_id}`);
    }
    catch (e) {
      if (e && chat_id) {
        deleteChat(chat_id);
      }
    }
  }, [])

  return {
    createAndSend,
    isPending: isPendingCreate || isPendingDelete || isPendingSend,
  };
}