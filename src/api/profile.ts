import type { EditableClientFields, IClient } from "../types/client";
import api from "../utils/api";

export const getProfileById = (id: number) => api.get(`/api/profile/${id}`);

export const updateProfile = (user: Partial<EditableClientFields>) => api.put<IClient>(`/api/profile`, user);
