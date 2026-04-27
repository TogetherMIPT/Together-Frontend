import { useState, type SubmitEventHandler } from "react";

import { useNavigate } from "react-router";

import { questions } from "./constants";
import {
  PageContainer,
  ContentWrapper,
  Title,
  Subtitle,
  Form,
  QuestionBlock,
  QuestionText,
  OptionButton,
  OptionLabel,
  OptionsRow,
} from './styled';
import { Button } from "../../components/Button";
import type { PostSurveyBody } from "../../types/survey";
import { useSendSurvey } from "../../hooks/data/useSendSurvey";
import { useAuthContext } from "../../context/auth/AuthContext";
import { HeaderControls } from "../../components/HeaderControls";

export const Survey = () => {
  const navigate = useNavigate()
  const { userId } = useAuthContext();
  const [answers, setAnswers] = useState<Partial<Omit<PostSurveyBody, 'user_id'>>>({});
  const { mutateAsync, isPending } = useSendSurvey();

  const handleOptionSelect = (questionId: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const isAllAnswered = Object.keys(answers).length === questions.length;

  const handleSubmit: SubmitEventHandler = async (e) => {
    e.preventDefault();
    if (isAllAnswered && userId) {
      await mutateAsync({
        user_id: userId,
        ...(answers as Omit<PostSurveyBody, 'user_id'>)
      });

      navigate('/survey/history');
    }
  };

  return (
    <PageContainer>
      <HeaderControls />
      <ContentWrapper>
        <Title>Чек-ап настроения</Title>
        <Subtitle>Ответьте честно на 3 вопроса, чтобы отследить свое состояние.</Subtitle>

        <Form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <QuestionBlock key={question.id}>
              <QuestionText>{question.text}</QuestionText>
              <OptionsRow>
                {question.options.map((option) => {
                  const isSelected = answers[question.id] === option.value;
                  const IconComponent = option.icon;

                  return (
                    <OptionButton
                      key={option.value}
                      type="button"
                      onClick={() => handleOptionSelect(question.id, option.value)}
                      $isActive={isSelected}
                      $activeColor={option.color}
                    >
                      <IconComponent 
                        color={isSelected ? option.color : '#9ca3af'} 
                      />
                      <OptionLabel $isActive={isSelected}>
                        {option.label}
                      </OptionLabel>
                    </OptionButton>
                  );
                })}
              </OptionsRow>
            </QuestionBlock>
          ))}

          <Button 
            type="submit" 
            disabled={!isAllAnswered}
            isLoading={isPending}
          >
            Завершить
          </Button>
        </Form>
      </ContentWrapper>
    </PageContainer>
  );
}
