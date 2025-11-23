import { useAuthContext } from "@/components/context/AuthContext";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Link } from "@/components/ui/Link";
import { PageWrapper } from "@/components/ui/PageWrapper";
import { Title } from "@/components/ui/Title";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const { setIsLoggedIn } = useAuthContext();
  const router = useRouter();

  const handleLogin = () => {
    setIsLoggedIn(true);
    router.replace('/(together)')
  }

  return (
    <PageWrapper>
      <Title>Together</Title>
      <View style={styles.form}>
        <Input placeholder="login" />
        <Input placeholder="password" secureTextEntry />
        <Button onPress={handleLogin}>Войти</Button>
        <Link href="/register">Регистрация</Link>
      </View>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  form: {
    gap: 16,
    width: '100%',
  }
})