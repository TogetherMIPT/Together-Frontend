import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { postWelcomeSurvey } from "../../api/survey";
import type { PostWelcomeSurveyBody, PostWelcomeSurveyResponse } from "../../types/survey";
import { QueryKeys } from "../../constants/QueryKeys";

export interface SurveyApiResponse {
  success: boolean;
  message?: string;
  id?: string;
}

export const useSendWelcomeForm = () =>{
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<PostWelcomeSurveyResponse>, Error, PostWelcomeSurveyBody>({
    mutationFn: postWelcomeSurvey,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.welcomeSurveyStatus] });
    }
  });
}
  