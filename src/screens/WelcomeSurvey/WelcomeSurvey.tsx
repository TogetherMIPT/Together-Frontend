import { useState, type ChangeEvent, type SubmitEventHandler } from 'react';
import {
  Overlay, FormContainer, FormGroup, Title, QuestionLabel, OptionItem, OptionsList, TextArea
} from './styled';
import { Button } from '../../components/Button';
import { useSendWelcomeForm } from '../../hooks/data/useSendWelcomeForm';
import { useCheckIsWelcomeFormCompleted } from '../../hooks/data/useCheckIsWelcomeFormCompleted';
import { useAuthContext } from '../../context/auth/AuthContext';
import type { ApproachType, FrequencyType, StatusType, SurveyFormData, UserSegmentType } from './types';
import { approaches, frequencies, segments, statuses } from './consts';
import { useMapFormDataToParams } from './utils';

export const WelcomeSurvey = () => {
  const { userId } = useAuthContext();
  const mapFormDataToParams = useMapFormDataToParams();
  
  const [formData, setFormData] = useState<SurveyFormData>({
    segment: '',
    status: '',
    request: '',
    approach: '',
    frequency: ''
  });

  const { data: isCompleted } = useCheckIsWelcomeFormCompleted();
  const { mutate, isPending } = useSendWelcomeForm();

  // Универсальный обработчик изменений
  const handleChange = <T extends keyof SurveyFormData>(
    field: T,
    value: SurveyFormData[T]
  ) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      // Автоматический сброс frequency при смене статуса
      if (field === 'status' && value !== 'with_psychologist') {
        updated.frequency = '';
      }
      return updated;
    });
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const { status, request, approach, frequency } = formData;

    if (!status || !request || !approach) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }
    if (status === 'true' && !frequency) {
      alert('Пожалуйста, укажите частоту встреч с психологом.');
      return;
    }

    const params = mapFormDataToParams(formData);

    if (params) mutate(params);
  };

  const showFrequency = formData.status === 'true';

  if (!userId || isCompleted) return null;

  return (
    <Overlay>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Анкета перед началом</Title>

        <FormGroup>
          <QuestionLabel>Что привело вас в приложение?</QuestionLabel>
          <OptionsList>
            {segments.map((it) => (
              <OptionItem key={it.value}>
                <input
                  type="radio"
                  name="segment"
                  value={it.value}
                  checked={formData.segment === it.value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('segment', e.target.value as UserSegmentType)}
                />
                {it.label}
              </OptionItem>
            ))}
          </OptionsList>
        </FormGroup>

        <FormGroup>
          <QuestionLabel>Вы занимаетесь с психологом или хотите использовать приложение просто для себя?</QuestionLabel>
          <OptionsList>
            {statuses.map((it) => (
              <OptionItem key={it.value}>
                <input
                  type="radio"
                  name="status"
                  value={it.value}
                  checked={formData.status === it.value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('status', e.target.value as StatusType)}
                />
                {it.label}
              </OptionItem>
            ))}
          </OptionsList>
        </FormGroup>

        <FormGroup>
          <QuestionLabel>Какой у вас запрос к психотерапии?</QuestionLabel>
          <TextArea
            placeholder="Опишите кратко вашу ситуацию или цель..."
            value={formData.request}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange('request', e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <QuestionLabel>Какой подход в психотерапии Вы сейчас используете?</QuestionLabel>
          <OptionsList>
            {approaches.map((app) => (
              <OptionItem key={app.value}>
                <input
                  type="radio"
                  name="approach"
                  value={app.value}
                  checked={formData.approach === app.value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('approach', e.target.value as ApproachType)}
                />
                {app.label}
              </OptionItem>
            ))}
          </OptionsList>
        </FormGroup>

        {showFrequency && (
          <FormGroup>
            <QuestionLabel>Сколько раз в неделю Вы общаетесь с психологом?</QuestionLabel>
            <OptionsList>
              {frequencies.map((freq) => (
                <OptionItem key={freq.value}>
                  <input
                    type="radio"
                    name="frequency"
                    value={freq.value}
                    checked={formData.frequency === freq.value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('frequency', e.target.value as FrequencyType)}
                  />
                  {freq.label}
                </OptionItem>
              ))}
            </OptionsList>
          </FormGroup>
        )}

        <Button type="submit" disabled={isPending} isLoading={isPending}>
          Отправить
        </Button>
      </FormContainer>
    </Overlay>
  );
}
