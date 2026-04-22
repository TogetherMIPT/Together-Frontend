import { useCallback } from "react";
import { useAuthContext } from "../../context/auth/AuthContext";
import type { PostWelcomeSurveyBody } from "../../types/survey";
import type { SurveyFormData } from "./types";

export const useMapFormDataToParams = () => {
  const { userId } = useAuthContext();
  return useCallback((params: SurveyFormData): PostWelcomeSurveyBody | undefined => {
    if (userId !== undefined) {
      return {
        user_id: userId,
        with_psychologist: params.status === 'true',
        therapy_request: params.request,
        therapy_approach: params.approach,
        weekly_meetings: params.frequency.length > 0 ? +params.frequency : 0,
        segment: params.segment
      }
    }
  }, [userId]);
};
