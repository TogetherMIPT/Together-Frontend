import { getAllChats } from '../../api/chat';
import { QueryKeys } from '../../constants/QueryKeys';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../../context/auth/AuthContext';

export const useFetchChats = () => {
  const { userId } = useAuthContext();

  return useQuery({
    queryKey: [QueryKeys.chats],
    queryFn: () => getAllChats(userId!),
    enabled: !!userId,
    select: (res) => res?.data?.chats,
  });
}
