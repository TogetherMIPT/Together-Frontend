import styled from "styled-components";

export const PageWrapper = styled('div')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  max-width: 100vw;
`

// Обертка для области чата
export const StyledChatWrapper = styled('div')`
  max-width: 600px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 93px;
`
// Обёртка для сообщений
export const MessagesWrapper = styled.div`
  width: 100vw;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const StyledTextInputWrapper = styled('div')`
  display: flex;
  flex-basis: 120px;
  position: fixed;
  bottom: 0;
`
