import { getChatMessages } from '../../api/chat';
import { QueryKeys } from '../../constants/QueryKeys';
import type { IChat } from '../../types/chat';
import { useQuery } from '@tanstack/react-query';

export const useFetchChatById = (id?: IChat['chat_id']) => useQuery({
  queryKey: [QueryKeys.chat, id],
  queryFn: () => getChatMessages(id!),
  enabled: !!id,
  select: (res) => res?.data?.messages || [],
});
