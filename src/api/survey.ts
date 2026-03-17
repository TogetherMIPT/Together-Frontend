import type { PostSurveyBody, PostSurveyResponse } from "../types/survey";
import api from "../utils/api";

export const postSurvey = (body: PostSurveyBody) => api.post<PostSurveyResponse>('api/survey', body);
