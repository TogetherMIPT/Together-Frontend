import { Colors } from '@/constants/Colors';
import { keyboardVerticalOffset } from '@/constants/KeyboardVerticalOffset';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FC, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface ChatInputProps {
  onSend: (text: string) => void;
  placeholder?: string;
  maxInputHeight?: number;
}

export const ChatInput: FC<ChatInputProps> = ({
  onSend,
  placeholder = 'Напишите сообщение...',
  maxInputHeight = 120,
}) => {
  const [text, setText] = useState<string>('');
  const inputRef = useRef<TextInput>(null);

  const handleSend = () => {
    if (text.trim()) {
      onSend(text.trim());
      setText('');
      // Опционально: сбросить фокус после отправки
      inputRef.current?.blur();
    }
  };

  const handleChangeText = (value: string) => {
    // Ограничиваем количество строк, если нужно
    setText(value);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={styles.container}
    >
      <View style={styles.inputWrapper}>
        <TextInput
          ref={inputRef}
          style={[
            styles.textInput,
            { maxHeight: maxInputHeight },
          ]}
          value={text}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#999"
          multiline
          textAlignVertical="top"
          enablesReturnKeyAutomatically
          returnKeyType="default"
          blurOnSubmit={false}
        />
        <TouchableOpacity
          style={[styles.sendButton, !text.trim() && styles.sendButtonDisabled]}
          onPress={handleSend}
          disabled={!text.trim()}
        >
          <Ionicons name="send" size={20} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  textInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: Colors.lightGrey,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: Colors.blue,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: Colors.grey,
  },
  sendButtonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
});
