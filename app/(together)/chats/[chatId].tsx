import { ChatInput } from "@/components/screens/Chat/ChatInput";
import { Message } from "@/components/screens/Chat/Message";
import { useFetchChatById } from "@/hooks/data/useFetchChatById";
import { IChat } from "@/types/chat";
import { IMessage } from "@/types/message";
import { useLocalSearchParams } from "expo-router";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const keyExtractor = (item: IMessage) => item.message_id;

const renderItem: ListRenderItem<IMessage> = ({ item }) => <Message message={item} />

export default function ChatScreen() {
  const { chatId } = useLocalSearchParams<{ chatId: IChat['chat_id'] }>();
  const { data: messages } = useFetchChatById(chatId);

  return (
    <SafeAreaView style={styles.list} edges={['top', 'left', 'right', 'bottom']}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.container}
        style={styles.list}
      />
      <ChatInput onSend={() => {}} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 8,
  }
})
