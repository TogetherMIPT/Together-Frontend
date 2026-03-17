import { useNavigate } from "react-router"
import { MoodFace } from "../icons";

export const SurveyButton = () => {
  const navigate = useNavigate();

  const goToSurvey = () => {
    navigate('/survey');
  }

  return <div onClick={goToSurvey}>
    <MoodFace />
  </div>
}