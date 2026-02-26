import { useMutation, useQueryClient, type DefaultError } from "@tanstack/react-query";
import { createChat } from "../../api/chat";
import type { AxiosResponse } from "axios";
import type { IChat } from "../../types/chat";
import { useAuthContext } from "../../context/auth/AuthContext";
import { QueryKeys } from "../../constants/QueryKeys";

export const useCreateChat = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuthContext();

  return useMutation<AxiosResponse<IChat>, DefaultError>({
    mutationFn: () => userId ? createChat(userId) : Promise.reject('no user id'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.chats] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.chat] });
    }
  });
}
