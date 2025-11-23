import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export const ProfileButton = () => {
  const router = useRouter();
  
  const handlePress = () => {
    router.navigate('/(together)/profile');
  }

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <Ionicons name="person" size={32} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})