import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../constants/QueryKeys";
import { checkWelcomeSurveyStatus } from "../../api/survey";
import { useAuthContext } from "../../context/auth/AuthContext";

export interface SurveyApiResponse {
  success: boolean;
  message?: string;
  id?: string;
}

export const useCheckIsWelcomeFormCompleted = () => {
  const { userId } = useAuthContext();
 return useQuery({
    queryFn: async () => {
      try {
        await checkWelcomeSurveyStatus();
        return true;
      } catch (e) {
        return false;
      }
    },
    queryKey: [QueryKeys.welcomeSurveyStatus, userId],
    enabled: !!userId,
  });
}