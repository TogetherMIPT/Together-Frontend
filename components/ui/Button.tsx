import { Colors } from "@/constants/Colors";
import { FC, PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface IProps {
  onPress: () => void;
}

export const Button: FC<PropsWithChildren<IProps>> = ({
  onPress,
  children
}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    padding: 20,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  }
})
