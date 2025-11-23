import { useAuthContext } from '@/components/context/AuthContext';
import { Stack } from 'expo-router';

export const Router = () => {
  const { isLoggedIn } = useAuthContext();
  
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerTitle: '', headerBackButtonDisplayMode: 'generic' }} />

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(together)" options={{ headerShown: false }} />
      </Stack.Protected>
      {/* Expo Router includes all routes by default. Adding Stack.Protected creates exceptions for these screens. */}
    </Stack>
  );
}