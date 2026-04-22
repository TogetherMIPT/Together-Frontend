import type { GetSurveyHistory, GetSurveyStatus, PostSurveyBody, PostSurveyResponse, PostWelcomeSurveyBody, PostWelcomeSurveyResponse } from "../types/survey";
import api from "../utils/api";

export const postSurvey = (body: PostSurveyBody) => api.post<PostSurveyResponse>('/api/survey', body);

export const checkWelcomeSurveyStatus = () => api.get<GetSurveyStatus>('/api/client_survey');

export const postWelcomeSurvey = (body: PostWelcomeSurveyBody) =>
  api.post<PostWelcomeSurveyResponse>('/api/client_survey', body);

export const checkSurveyStatus = () => api.get<GetSurveyStatus>('/api/survey/status');

export const getSurveyResult = () => api.get<GetSurveyHistory>('/api/survey/history');
