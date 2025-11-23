import { mockChats } from '@/__mocks/chats';
import { QueryKeys } from '@/constants/QueryKeys';
import { useQuery } from '@tanstack/react-query';

export const useFetchChats = () => useQuery({
  queryKey: [QueryKeys.chats],
  queryFn: () => mockChats
})
