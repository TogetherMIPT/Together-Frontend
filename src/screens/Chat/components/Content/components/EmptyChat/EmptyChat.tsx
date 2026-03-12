import { useParams } from 'react-router';
import { Text } from '../../../../../../components/Text';
import { useSendMessage } from '../../../../../../hooks/data/useSendMessage';
import { NewMessage, ContentWrapper } from './styled';

const firstMessages = [
  'Мне нужен совет',
  'Меня кое-что тревожит',
  'Меня не покидает мысль',
  'У меня есть хорошие новости',
  'Мне приснился сон'
]

export const EmptyChat = () => {
  const { chat_id } = useParams<{ chat_id: string }>();
  const { mutate } = useSendMessage(chat_id);

  const sendMessage = (message: string) => () => {
    if (chat_id !== undefined) {
      mutate({
        message,
        chat_id: +chat_id,
      });
    }
  }
  
  return (
    <ContentWrapper>
      <Text>Привет! Расскажи, чем бы ты хотел сегодня поделиться</Text>
      {firstMessages.map((message) => <NewMessage onClick={sendMessage(message)}>{message}</NewMessage>)}
    </ContentWrapper>
  );
}