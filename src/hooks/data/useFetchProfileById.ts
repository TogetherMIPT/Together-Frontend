import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../context/auth/AuthContext"
import { getProfileById } from "../../api/profile";
import { QueryKeys } from "../../constants/QueryKeys";

export const useFetchProfileById = () => {
  const { userId } = useAuthContext();

  return useQuery({
    queryKey: [QueryKeys.profile, userId],
    queryFn: () => getProfileById(userId!),
    enabled: !!userId,
  })
}