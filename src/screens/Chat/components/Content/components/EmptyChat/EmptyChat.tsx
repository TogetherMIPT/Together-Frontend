import { Text } from '../../../../../../components/Text';
import { ContentWrapper } from './styled';
import { useCreateChatAndSendMessage } from '../../../../../../hooks/data/useCreateChatAndSendMessage';
import { NewMessage } from './components/NewMessage';

const firstMessages = [
  'Мне нужен совет',
  'Меня кое-что тревожит',
  'Меня не покидает мысль',
  'У меня есть хорошие новости',
  'Мне приснился сон'
]

export const EmptyChat = () => {
  const { createAndSend, isPending } = useCreateChatAndSendMessage();

  const sendMessage = (message: string) => () => {
    createAndSend(message);
  }
  
  return (
    <ContentWrapper>
      <Text>Привет! Расскажи, чем бы ты хотел сегодня поделиться</Text>
      {firstMessages.map((message) => (
        <NewMessage
          key={message}
          isLoading={isPending}
          onClick={sendMessage(message)}
        >
          {message}
        </NewMessage>
        ))}
    </ContentWrapper>
  );
}