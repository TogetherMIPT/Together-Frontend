import { useMutation, useQueryClient, type DefaultError } from "@tanstack/react-query";
import { sendMessage } from "../../api/message";
import type { IMessage, IMessageRequestParams } from "../../types/message";
import type { AxiosResponse } from "axios";
import { QueryKeys } from "../../constants/QueryKeys";
import type { IChatResponse } from "../../types/chat";

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  
  return useMutation<AxiosResponse<IMessage>, DefaultError, IMessageRequestParams>({
    mutationFn: sendMessage,
    onMutate: ({ message, chat_id }) => {
      queryClient.setQueryData(
        [QueryKeys.chat, chat_id],
        (prevData: AxiosResponse<IChatResponse>) => {
          const userMessage: IMessage = {
            message_id: Date.now(),
            chat_id: +(chat_id || 0),
            created_at: new Date().toISOString(),
            message_text: message,
            is_from_user: true,
          };

          if (prevData)
            return ({
              ...prevData,
              data: {
                ...prevData?.data,
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
        queryKey: [QueryKeys.chat]
      });
    },
  });
}
