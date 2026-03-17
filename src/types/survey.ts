export interface PostSurveyBody {
  user_id: number,
  mood_answer: number,
  anxiety_answer: number,
  control_answer: number,
}

export interface PostSurveyResponse {
  survey_id: number,
  message:  string,
}
