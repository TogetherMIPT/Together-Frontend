import type { GetSurveyHistory, GetSurveyStatus, PostSurveyBody, PostSurveyResponse } from "../types/survey";
import api from "../utils/api";

export const postSurvey = (body: PostSurveyBody) => api.post<PostSurveyResponse>('/api/survey', body);

export const checkSurveyStatus = () => api.get<GetSurveyStatus>('/api/survey/status');

export const getSurveyResult = () => api.get<GetSurveyHistory>('/api/survey/history');
