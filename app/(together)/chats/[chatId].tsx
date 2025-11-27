import { ChatInput } from '@/components/screens/Chat/ChatInput';
import { Message } from '@/components/screens/Chat/Message';
import { Colors } from '@/constants/Colors';
import { useFetchChatById } from '@/hooks/data/useFetchChatById';
import { IMessage } from '@/types/message';
import { useLocalSearchParams } from 'expo-router';
import { useRef } from 'react';
import {
  FlatList,
  StyleSheet,
  ListRenderItem,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AIChatScreen = () => {
  const { chatId } = useLocalSearchParams<{ chatId: string }>();
  const { data: messages } = useFetchChatById(chatId);
  const flatListRef = useRef<FlatList>(null);

  const handleSend = (text: string) => {
    console.log('sent', text);
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const renderMessage: ListRenderItem<IMessage> = ({ item }) => (
    <Message message={item} />
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <FlatList<IMessage>
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.message_id}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
        onLayout={() => flatListRef.current?.scrollToEnd({ animated: false })}
      />

      <ChatInput onSend={handleSend} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default AIChatScreen;
