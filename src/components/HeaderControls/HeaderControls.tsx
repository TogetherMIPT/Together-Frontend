import { HomeButton } from "../HomeButton"
import { SurveyButton } from "../SurveyButton"
import { ProfileButton } from "../../screens/Chats/components/Header/components/ProfileButton"
import { ActionsWrapper } from "../../screens/Chats/components/Header/styled"
import { StyledChatControls } from "./styled"

export const HeaderControls = () => {
  return (
    <StyledChatControls>
      <HomeButton />
      <ActionsWrapper>
        <SurveyButton />
        <ProfileButton />
      </ActionsWrapper>
    </StyledChatControls>
  )
}