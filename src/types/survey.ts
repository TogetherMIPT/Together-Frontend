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
