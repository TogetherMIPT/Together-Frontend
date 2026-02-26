import { StyledWrapper } from "./styled";
import { Text } from "../../../../components/Text";
import { ProfileButton } from "./components/ProfileButton";

export const Header = () => {
  return <StyledWrapper>
    <Text>Together</Text>
    <ProfileButton />
  </StyledWrapper>
};
