import { ProfileButton } from '@/components/navigation/ProfileButton';
import { Stack } from 'expo-router';

const isLoggedIn = true;
const isAdmin = true;

export default function TogetherLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Together', headerRight: ProfileButton }} />
      <Stack.Screen name="profile" options={{ headerTitle: 'Профиль', headerBackButtonDisplayMode: 'generic' }} />
    </Stack>
  );
}
