import { useMutation } from "@tanstack/react-query"
import { renameChat } from "../../api/chat"
import type { IChatResponse, IRenameChatBody } from "../../types/chat"
import type { AxiosResponse } from "axios"

export const useRenameChat = () => {
  return useMutation<AxiosResponse<IChatResponse>, Error, { chatId: number, body: IRenameChatBody }>({
    mutationFn: renameChat,
  })
}