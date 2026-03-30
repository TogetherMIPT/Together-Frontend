import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Graph, MoodFace, CloseIcon } from "../icons";
import { useCheckSurveyStatus } from "../../hooks/data/useCheckSurveyStatus";
import {
  ButtonWrapper,
  ActionButton,
  Tooltip,
  TooltipContent,
  TooltipTitle,
  TooltipText,
  TooltipAction,
  TooltipClose,
  TooltipArrow,
} from "./styled";

export const SurveyButton = () => {
  const navigate = useNavigate();
  const { data: isSurveyCompleted } = useCheckSurveyStatus();
  
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<'top' | 'bottom'>('bottom');
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("survey_button_onboard_seen");

    if (!hasSeenOnboarding) {
      const timer = setTimeout(() => {
        setShowOnboarding(true);
        
        // Определяем позицию тултипа
        if (buttonRef.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          const spaceAbove = rect.top;

          setTooltipPosition(spaceAbove < 300 ? 'bottom' : 'top');
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem("survey_button_onboard_seen", "true");
  };

  const goToSurvey = () => {
    if (showOnboarding) handleCloseOnboarding();
    navigate('/survey');
  };

  const goToSurveyHistory = () => {
    navigate('/survey/history');
  };

  return (
    <ButtonWrapper ref={buttonRef}>
      <ActionButton
        $isPulsing={showOnboarding}
        onClick={isSurveyCompleted ? goToSurveyHistory : goToSurvey}
      >
        {isSurveyCompleted ? <Graph /> : <MoodFace />}
      </ActionButton>

      {showOnboarding && (
        <Tooltip $position={tooltipPosition}>
          <TooltipClose onClick={handleCloseOnboarding}>
            <CloseIcon />
          </TooltipClose>
          
          <TooltipContent>
            <TooltipTitle>Как вы себя чувствуете?</TooltipTitle>
            <TooltipText>
              Пройдите быстрый чек-ап настроения, чтобы получить персональные рекомендации от ИИ-психолога.
            </TooltipText>
            <TooltipAction onClick={handleCloseOnboarding}>
              Понятно
            </TooltipAction>
          </TooltipContent>
          
          <TooltipArrow $position={tooltipPosition} />
        </Tooltip>
      )}
    </ButtonWrapper>
  );
};
