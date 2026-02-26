import { useMutation, useQueryClient, type DefaultError } from "@tanstack/react-query";
import { deleteChat } from "../../api/chat";
import type { AxiosResponse } from "axios";
import type { IChat } from "../../types/chat";
import { QueryKeys } from "../../constants/QueryKeys";

export const useDeleteChat = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<IChat>, DefaultError, string>({
    mutationFn: deleteChat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.chats] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.chat] });
    }
  });
}
