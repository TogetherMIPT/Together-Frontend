import { mockMessages } from '@/__mocks/messages';
import { QueryKeys } from '@/constants/QueryKeys';
import { IChat } from '@/types/chat';
import { useQuery } from '@tanstack/react-query';

export const useFetchChatById = (id: IChat['chat_id']) => useQuery({
  queryKey: [QueryKeys.chats],
  queryFn: () => mockMessages,
  enabled: !!id,
})
