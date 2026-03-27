import { useQuery } from "@tanstack/react-query";
import { getSurveyResult } from "../../api/survey";
import { QueryKeys } from "../../constants/QueryKeys";
import type { AxiosResponse } from "axios";
import type { GetSurveyHistory } from "../../types/survey";

const select = (res: AxiosResponse<GetSurveyHistory>) => res.data;

export const useGetSurveyResults = () => useQuery({
  queryKey: [QueryKeys.surveyResults],
  queryFn: getSurveyResult,
  select,
});
