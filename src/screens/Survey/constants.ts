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
    text: 'Как вы чувствовали себя эмоционально сегодня?',
    options: [
      { value: 1, label: 'Очень тяжело', icon: MoodBad, color: '#ef4444' },
      { value: 2, label: 'Скорее тяжело', icon: MoodNeutral, color: '#f59e0b' },
      { value: 3, label: 'Хорошо', icon: MoodGood, color: '#10b981' },
    ],
  },
  {
    id: 'anxiety_answer',
    text: 'Насколько сильным было внутреннее напряжение сегодня?',
    options: [
      { value: 1, label: 'Очень сильное', icon: AnxietyHigh, color: '#ef4444' },
      { value: 2, label: 'Заметное', icon: AnxietyMid, color: '#f59e0b' },
      { value: 3, label: 'Почти не было', icon: AnxietyLow, color: '#10b981' },
    ],
  },
  {
    id: 'control_answer',
    text: 'Насколько у вас сегодня было ощущение, что вы справляетесь с происходящим?',
    options: [
      { value: 1, label: 'Совсем не справляюсь', icon: ControlLow, color: '#ef4444' },
      { value: 2, label: 'Скорее трудно', icon: ControlMid, color: '#f59e0b' },
      { value: 3, label: 'Чувствую опору', icon: ControlHigh, color: '#10b981' },
    ],
  },
];