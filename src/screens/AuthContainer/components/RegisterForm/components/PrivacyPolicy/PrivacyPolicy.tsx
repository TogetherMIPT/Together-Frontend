import type { FC } from 'react';
import privacyPolicyPdf from '../../../../../../assets/docs/privacy_policy.pdf';
import { PrivacyLink } from './styled';

interface IProps {
  text?: string;
}

export const PrivacyPolicy: FC<IProps> = ({ text = 'Политика конфиденциальности' }) => {
  return (
    <PrivacyLink 
      href={privacyPolicyPdf}
      target="_blank" 
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      {text}
    </PrivacyLink>
  )
}