import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { postWelcomeSurvey } from "../../api/survey";
import type { PostWelcomeSurveyBody, PostWelcomeSurveyResponse } from "../../types/survey";

export interface SurveyApiResponse {
  success: boolean;
  message?: string;
  id?: string;
}

export const useSendWelcomeForm = () =>
  useMutation<AxiosResponse<PostWelcomeSurveyResponse>, Error, PostWelcomeSurveyBody>({
    mutationFn: postWelcomeSurvey,
  });
  