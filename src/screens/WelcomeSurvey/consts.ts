import type { ApproachType, FrequencyType, RadioItem, StatusType, UserSegmentType } from "./types";

// with_psychologist: boolean;
// therapy_request: string;
// therapy_approach: string;
// weekly_meetings: number;

export const segments: RadioItem<UserSegmentType>[] = [
  { value: 'short_term_solver',  label: 'Быстро снять острое состояние (стресс, паника, конфликт)'},
  { value: 'solve_problem',  label: 'Разобраться в одной конкретной ситуации' },
  { value: 'crisis_support',  label: 'Проработать повторяющуюся проблему (отношения, самооценка)' },
  { value: 'long_term_explorer',  label: 'Вести долгосрочную работу над собой' },
  { value: 'curious_newbie',  label: 'Пока не знаю, хочу попробовать' },
]

export const statuses: RadioItem<StatusType>[] = [
  { value: 'true',  label: 'Занимаюсь с психологом' },
  { value: 'false',  label: 'Просто для себя' },
]

export const approaches: RadioItem<ApproachType>[] = [
  { value: 'cbt', label: 'КПТ-стиль: выявлять искажения мышления, работать с убеждениями' },
  { value: 'gestalt', label: 'Гештальт/экзистенциальный: фокус на чувствах, «здесь и сейчас», смысле' },
  { value: 'psychoanalysis', label: 'Психоаналитический: исследование прошлого, паттернов, бессознательного' },
  { value: 'somatic', label: 'Телесно-ориентированный: дыхательные практики, заземление, расслабление' },
  { value: 'coaching', label: 'Коучинговый: цели, план действий, конкретные шаги' },
  { value: 'narrative', label: 'Нарративный: переписывание истории, поиск ресурсов в опыте' },
  { value: 'integrative', label: 'Интегративный: гибко, под мой запрос' },
  { value: 'other', label: 'Другое / Не знаю' }
];

export const frequencies: RadioItem<FrequencyType>[] = [
  { value: '1', label: '1 раз в неделю' },
  { value: '2', label: '2 раза в неделю' },
  { value: '3', label: 'Чаще' },
  { value: '0', label: 'Реже' }
];
