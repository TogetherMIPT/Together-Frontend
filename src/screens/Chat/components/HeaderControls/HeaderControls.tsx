import { HomeButton } from "../../../../components/HomeButton"
import { SurveyButton } from "../../../../components/SurveyButton"
import { ProfileButton } from "../../../Chats/components/Header/components/ProfileButton"
import { ActionsWrapper } from "../../../Chats/components/Header/styled"
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