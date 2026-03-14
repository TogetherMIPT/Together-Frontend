import { HomeButton } from "../../../../components/HomeButton"
import { ProfileButton } from "../../../Chats/components/Header/components/ProfileButton"
import { StyledChatControls } from "./styled"

export const HeaderControls = () => {
  return (
    <StyledChatControls>
      <HomeButton />
      <ProfileButton />
    </StyledChatControls>
  )
}