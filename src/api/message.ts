import type { IMessageRequestParams } from "../types/message";
import api from "../utils/api";

export const sendMessage = (body: IMessageRequestParams) => api.post(`/api/message`, body);
