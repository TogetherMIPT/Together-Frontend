import { useNavigate } from "react-router"
import { Graph, MoodFace } from "../icons";
import { useCheckSurveyStatus } from "../../hooks/data/useCheckSurveyStatus";

export const SurveyButton = () => {
  const navigate = useNavigate();
  const { data: isSurveyCompleted } = useCheckSurveyStatus();

  const goToSurvey = () => {
    navigate('/survey');
  }

  const goToSurveyHistory = () => {
    navigate('/survey/history');
  }

  if (!isSurveyCompleted){
    return <div onClick={goToSurvey}>
      <MoodFace />
    </div>
  }

  return <div onClick={goToSurveyHistory}>
    <Graph />
  </div>
}
