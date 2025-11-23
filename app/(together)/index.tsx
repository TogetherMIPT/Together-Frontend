import { Chat } from "@/components/screens/Chat";
import { useFetchChats } from "@/hooks/data/useFetchChats";
import { IChat } from "@/types/chat";
import { useRouter } from "expo-router";
import { memo, useCallback } from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";

const keyExtractor = (item: IChat) => item.chat_id;

export const Together = memo(() => {
  const router = useRouter();
  const { data: chats } = useFetchChats();

  const renderItem: ListRenderItem<IChat> = useCallback(({item}) => {
    const handlePress = () => {
      router.navigate(`/(together)/chats/${item.chat_id}`)
    }

    return (
      <Chat onPress={handlePress} chat={item} />
    )
  }, [])

  return (
    <FlatList
      data={chats}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
    />
  );
})

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  separator: {
    height: 12,
  }
})

export default Together;
