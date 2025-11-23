import { useAuthContext } from "@/components/context/AuthContext";
import { Button } from "@/components/ui/Button";
import { PageWrapper } from "@/components/ui/PageWrapper";
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();
  const { setIsLoggedIn } = useAuthContext();

  const logout = () => {
    setIsLoggedIn?.(false);
  };

  return <PageWrapper>
    <Button onPress={logout}>
      Выйти
    </Button>
  </PageWrapper>
}