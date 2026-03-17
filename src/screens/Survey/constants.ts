import {
  MoodBad,
  MoodGood,
  MoodNeutral,
  ControlHigh,
  ControlLow,
  ControlMid,
  AnxietyHigh,
  AnxietyLow,
  AnxietyMid
} from "../../components/icons";
import type { PostSurveyBody } from "../../types/survey";

interface IAnswer {
  value: number;
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  color: string;
}

interface IQuestion {
  id: keyof Omit<PostSurveyBody, 'user_id'>,
  text: string;
  options: IAnswer[];
}

export const questions: IQuestion[] = [
  {
    id: 'mood_answer',
    text: 'Как вы оцениваете свое эмоциональное состояние сегодня?',
    options: [
      { value: 1, label: 'Плохо', icon: MoodBad, color: '#ef4444' },
      { value: 2, label: 'Нормально', icon: MoodNeutral, color: '#f59e0b' },
      { value: 3, label: 'Хорошо', icon: MoodGood, color: '#10b981' },
    ],
  },
  {
    id: 'anxiety_answer',
    text: 'Насколько сильно вы чувствовали напряжение или тревогу?',
    options: [
      { value: 1, label: 'Сильная тревога', icon: AnxietyHigh, color: '#ef4444' },
      { value: 2, label: 'Умеренно', icon: AnxietyMid, color: '#f59e0b' },
      { value: 3, label: 'Спокоен', icon: AnxietyLow, color: '#10b981' },
    ],
  },
  {
    id: 'control_answer',
    text: 'Насколько вы чувствовали контроль над своей жизнью и ситуациями?',
    options: [
      { value: 1, label: 'Потерян', icon: ControlLow, color: '#ef4444' },
      { value: 2, label: 'Частично', icon: ControlMid, color: '#f59e0b' },
      { value: 3, label: 'Полный контроль', icon: ControlHigh, color: '#10b981' },
    ],
  },
];