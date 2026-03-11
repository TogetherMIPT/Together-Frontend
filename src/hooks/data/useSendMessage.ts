import { useMutation, useQueryClient, type DefaultError } from "@tanstack/react-query";
import { sendMessage } from "../../api/message";
import type { IMessage, IMessageRequestParams } from "../../types/message";
import type { AxiosResponse } from "axios";
import { QueryKeys } from "../../constants/QueryKeys";
import type { IChatResponse } from "../../types/chat";

export const useSendMessage = (chatId?: string) => {
  const queryClient = useQueryClient();
  
  return useMutation<AxiosResponse<IMessage>, DefaultError, IMessageRequestParams>({
    mutationFn: sendMessage,
    onMutate: ({ message }) => {
      queryClient.setQueryData(
        [QueryKeys.chat, chatId],
        (prevData: AxiosResponse<IChatResponse>) => {
          const userMessage: IMessage = {
            message_id: Date.now(),
            chat_id: +(chatId || 0),
            created_at: new Date().toISOString(),
            message_text: message,
            is_from_user: true,
          };

          return ({
          ...prevData,
          data: {
            ...prevData.data,
            messages: [
              userMessage,
              ...prevData?.data?.messages,
            ]
          }
        })}
      );

      return message;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.chat, chatId]
      });
    },
  });
}
