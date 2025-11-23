import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PageWrapper } from "@/components/ui/PageWrapper";
import { Title } from "@/components/ui/Title";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Register() {
  const router = useRouter();
  
  const handleRegister = () => {
    router.navigate('/');
  }

  return (
    <PageWrapper>
      <Title>Регистрация</Title>
      <View style={styles.form}>
        <Input placeholder="login" />
        <Input placeholder="password" secureTextEntry />
        <Button onPress={handleRegister}>Войти</Button>
      </View>
    </PageWrapper>
    )
}

const styles = StyleSheet.create({
  form: {
    gap: 16,
    width: '100%'
  }
})
