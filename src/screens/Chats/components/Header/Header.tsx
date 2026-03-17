import { ActionsWrapper, StyledWrapper } from "./styled";
import { Text } from "../../../../components/Text";
import { ProfileButton } from "./components/ProfileButton";
import { SurveyButton } from "../../../../components/SurveyButton";

export const Header = () => {
  return <StyledWrapper>
    <Text>Together</Text>
    <ActionsWrapper>
      <SurveyButton />
      <ProfileButton />
    </ActionsWrapper>
  </StyledWrapper>
};
