import type { IMessageRequestParams } from "../types/message";
import api from "../utils/api";

export const sendMessage = (body: IMessageRequestParams) => {
  console.log('send message', body)
  return api.post(`/api/message`, body)
};
