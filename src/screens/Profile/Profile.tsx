import { type FC, type SubmitEventHandler, useCallback, useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Notification,
  PageWrapper,
  ProfileBody,
  ProfileContainer,
  ProfileHeader,
  ProfileSubtitle,
  ProfileTitle,
} from './styled';
import type { EditableClientFields } from '../../types/client';
import { FormField } from './components/FormField';
import { formFields } from './fields';
import { useUpdateProfile } from '../../hooks/data/useUpdateProfile';
import { useFetchProfileById } from '../../hooks/data/useFetchProfileById';
import { BackButton } from '../../components/BackButton';
import { useLogout } from '../../hooks/data/useLogout';

export const Profile: FC = () => {
  const { data, isSuccess } = useFetchProfileById();
  const [profile, setProfile] = useState<Partial<EditableClientFields>>();
  const { mutate: logout } = useLogout();

  useEffect(() => {
    if (!profile && isSuccess && data?.data) {
      console.log('update profile', data.data.birthdate ? data.data.birthdate.split('T')?.[0] : undefined)
      setProfile({
        ...data.data,
        birthdate: data.data.birthdate ? data.data.birthdate.split('T')?.[0] : undefined
      });
    }
  }, [profile, isSuccess, data?.data, data?.data?.birthdate])

  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const { isPending, mutate } = useUpdateProfile((data) => {
      setProfile({ ...data, birthdate: data?.birthdate ? data.birthdate.split('T')?.[0] : undefined});
      showNotification('Данные успешно сохранены!', 'success');
    },
    (error) => {
      showNotification(error.message || 'Ошибка при сохранении данных', 'error');
    });

  // Показать уведомление
  const showNotification = useCallback(
    (message: string, type: 'success' | 'error') => {
      setNotification({ message, type });
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    },
    []
  );

  // Обработчик отправки формы
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      // Формируем данные для отправки (исключаем токены)
      if (profile) {
        mutate(profile);
      }
    },
    [profile, mutate, showNotification]
  );

  return (
    <PageWrapper>
      <BackButton />
      <ProfileContainer>
        <ProfileHeader>
          <ProfileTitle>Мой профиль</ProfileTitle>
          <ProfileSubtitle>Управляйте вашей личной информацией</ProfileSubtitle>
        </ProfileHeader>

        <ProfileBody>
          <form onSubmit={handleSubmit}>
            {formFields.map((field) =>(
              <FormField
                key={field.name}
                title={field.title}
                name={field.name}
                type={field.type}
                value={profile?.[field.name] || ''}
                placeholder={field.placeholder}
                onChange={setProfile}
              />
            ))}
            
            <ButtonGroup>
              <Button type="submit" primary fullWidth disabled={isPending}>
                {isPending ? 'Сохранение...' : 'Сохранить изменения'}
              </Button>
              <Button type="button" onClick={logout} fullWidth>
                Выйти
              </Button>
            </ButtonGroup>
          </form>
        </ProfileBody>
      </ProfileContainer>

      {notification && (
        <Notification type={notification.type}>
          {notification.message}
        </Notification>
      )}
    </PageWrapper>
  );
};
