import { useMutation, useQueryClient, type DefaultError } from "@tanstack/react-query";
import { updateProfile } from "../../api/profile";
import type { EditableClientFields } from "../../types/client";

export const useUpdateProfile = (onSuccess: (data: Partial<EditableClientFields>) => void, onError: (error: DefaultError) => void) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateProfile,
    onError,
    onSuccess: (res) => {
      const { user_id, creation_datetime, ...profile } = res?.data;
      onSuccess?.(profile);
      // Инвалидируем кэш для обновления данных в других компонентах
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
}