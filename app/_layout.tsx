import { AuthContextProvider } from '@/components/context/AuthContext';
import { Router } from '@/components/navigation/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function AppLayout() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
