import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./navigation";
import { AuthContextProvider } from "./context/auth/AuthContext";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
