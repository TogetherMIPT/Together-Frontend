import type { ChangeEventHandler, FC } from "react"
import { ConsentError, ConsentLabel, ConsentText, ConsentWrapper, StyledCheckbox } from "./styled"
import { PrivacyPolicy } from "../PrivacyPolicy/PrivacyPolicy";

interface IProps {
  value: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

export const ConsentCheckbox: FC<IProps> = ({
  value,
  onChange,
  error,
}) => {
  return (
    <ConsentWrapper>
      <ConsentLabel>
        <StyledCheckbox
          name="agreeToPrivacy"
          checked={value}
          onChange={onChange}
        />
        <ConsentText>
          Я ознакомлен и согласен с{' '}
          <PrivacyPolicy />
        </ConsentText>
      </ConsentLabel>
      {error && (
        <ConsentError>{error}</ConsentError>
      )}
    </ConsentWrapper>
  )
}
