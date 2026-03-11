import styled from "styled-components";

type TMessageStyled = { isOutgoing: boolean }

// Базовый стиль сообщения
const MessageBase = styled<TMessageStyled>('div')`
  display: flex;
  flex-direction: column;
  align-items: ${({ isOutgoing }) => isOutgoing ? 'flex-end' : 'flex-start'};

  gap: 12px;
  width: 80%;
`;

// Входящее сообщение
export const IncomingMessage = styled<TMessageStyled>(MessageBase)`
  align-self: flex-start;
`;

// Исходящее сообщение
export const OutgoingMessage = styled<TMessageStyled>(MessageBase)`
  align-self: flex-end;
`;

// Контент сообщения
export const MessageContent = styled('div')`
  padding: 12px 16px;
  position: relative;
  line-height: 1.4;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

// Время сообщения
export const MessageTime = styled.span`
  font-size: 11px;
  opacity: 0.7;
  margin-left: 8px;
  display: inline-block;
  min-width: 40px;
  text-align: right;
`;
