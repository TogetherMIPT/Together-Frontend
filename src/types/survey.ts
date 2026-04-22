export interface PostWelcomeSurveyBody {
  user_id: number;
  with_psychologist: boolean;
  therapy_request: string;
  therapy_approach: string;
  weekly_meetings: number;
}

export interface PostWelcomeSurveyResponse {
  client_survey_id: number;
  message:  string;
}

export interface PostSurveyBody {
  user_id: number;
  mood_answer: number;
  anxiety_answer: number;
  control_answer: number;
}

export interface PostSurveyResponse {
  survey_id: number;
  message:  string;
}

export interface GetSurveyStatus {
  completed: boolean;
}

export interface GetSurveyHistory {
  recommendations: string;
  summary: string;
  surveys: SurveyHistoryRecord[];
}

export interface SurveyHistoryRecord {
  survey_id: number;
  mood_answer: number;
  anxiety_answer: number;
  control_answer: number;
  creation_datetime: string;
}
