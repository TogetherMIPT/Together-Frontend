import type { AxiosResponse } from 'axios';
import { getChatMessages } from '../../api/chat';
import { QueryKeys } from '../../constants/QueryKeys';
import type { IChat, IChatResponse } from '../../types/chat';
import { useQuery } from '@tanstack/react-query';

const select = (res: AxiosResponse<IChatResponse>) => {
  const messages = res?.data?.messages || [];

  return messages.reverse();
}

export const useFetchChatById = (id?: IChat['chat_id']) => useQuery({
  queryKey: [QueryKeys.chat, id],
  queryFn: () => getChatMessages(id!),
  enabled: !!id,
  select,
});
