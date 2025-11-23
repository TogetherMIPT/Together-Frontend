import { Colors } from "@/constants/Colors";
import { IChat } from "@/types/chat";
import { FC, memo } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface IProps {
  chat: IChat;
  onPress: () => void;
}

export const Chat: FC<IProps> = memo(({ chat, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>
        {chat.chat_name}
      </Text>
    </Pressable>
  )
})

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.grey,
    borderRadius: 8,
    padding: 20
  },
  text: {
    fontFamily: 'roboto',
    fontSize: 24,
    letterSpacing: -0.08,
    color: Colors.black,
  }
})