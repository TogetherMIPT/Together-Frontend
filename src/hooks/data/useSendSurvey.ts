import { useMutation } from "@tanstack/react-query";
import { postSurvey } from "../../api/survey";

export const useSendSurvey = () => useMutation({
  mutationFn: postSurvey,
});
