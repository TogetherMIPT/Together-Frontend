
export type UserSegmentType = 'short_term_solver' | 'crisis_support' | 'solve_problem' | 'long_term_explorer' | 'curious_newbie';
export type StatusType = 'true' | 'false';
export type ApproachType = 'cbt' | 'gestalt' | 'psychoanalysis' | "narrative" | "somatic" | "coaching" | "integrative"| 'other';
export type FrequencyType = '1' | '2' | '3' | '0';

export type RadioItem<T> = {
  value: T;
  label: string;
}

export interface SurveyFormData {
  segment: UserSegmentType | '';
  status: StatusType | '';
  request: string;
  approach: ApproachType | '';
  frequency: FrequencyType | '';
}