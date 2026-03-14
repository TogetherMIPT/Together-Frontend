import { Text } from '../../../../../../components/Text';
import { NewMessage, ContentWrapper } from './styled';
import { useCreateChatAndSendMessage } from '../../../../../../hooks/data/useCreateChatAndSendMessage';

const firstMessages = [
  'Мне нужен совет',
  'Меня кое-что тревожит',
  'Меня не покидает мысль',
  'У меня есть хорошие новости',
  'Мне приснился сон'
]

export const EmptyChat = () => {
  const send = useCreateChatAndSendMessage();

  const sendMessage = (message: string) => () => {
    send(message);
  }
  
  return (
    <ContentWrapper>
      <Text>Привет! Расскажи, чем бы ты хотел сегодня поделиться</Text>
      {firstMessages.map((message) => <NewMessage onClick={sendMessage(message)}>{message}</NewMessage>)}
    </ContentWrapper>
  );
}