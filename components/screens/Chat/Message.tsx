import { Colors } from "@/constants/Colors";
import { IMessage } from "@/types/message";
import { FC, memo } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  message: IMessage;
}

export const Message: FC<IProps> = memo(({ message }) => {
  const { message_text, sender } = message;
  const isUser = sender === 'user';

  return (
    <View
      style={[
        styles.messageContainer,
        isUser
          ? styles.userMessageContainer
          : styles.assistantMessageContainer
      ]}
    >
      <Text
        style={[
          styles.messageText,
          isUser ? styles.userMessageText : styles.assistantMessageText
        ]}
      >
        {message_text}
      </Text>
    </View>
  )
})

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '80%', // ограничиваем ширину, чтобы сообщение не растягивалось на весь экран
    padding: 10,
    borderRadius: 12,
    marginVertical: 4,
    marginHorizontal: 8,
    alignSelf: 'flex-start', // для собеседника (слева)
  },
  userMessageContainer: {
    backgroundColor: Colors.blue,
    alignSelf: 'flex-end', // для пользователя (справа)
  },
  assistantMessageContainer: {
    backgroundColor: Colors.lightBlue,
    alignSelf: 'flex-start',
  },
  userMessageText: {
    color: Colors.white
  },
  assistantMessageText: {
    color: Colors.black
  },
  messageText: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 20,
    includeFontPadding: false, // убирает лишний отступ сверху/снизу у текста
  },
});