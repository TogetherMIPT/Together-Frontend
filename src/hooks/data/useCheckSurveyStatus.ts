import { useQuery } from "@tanstack/react-query";
import { checkSurveyStatus } from "../../api/survey";
import { QueryKeys } from "../../constants/QueryKeys";
import type { AxiosResponse } from "axios";
import type { GetSurveyStatus } from "../../types/survey";

const select = (res: AxiosResponse<GetSurveyStatus>) => res.data.completed

export const useCheckSurveyStatus = () => useQuery({
  queryKey: [QueryKeys.surveyStatus],
  queryFn: checkSurveyStatus,
  select,
});
