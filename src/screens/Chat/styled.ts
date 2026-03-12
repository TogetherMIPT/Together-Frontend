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

export const StyledTextInputWrapper = styled('div')`
  display: flex;
  flex-basis: 120px;
  position: fixed;
  bottom: 0;
`
