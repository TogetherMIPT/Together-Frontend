import privacyPolicyPdf from '../../../../../../assets/docs/politika_konfidencialnosti_psych_app.docx.pdf';
import { PrivacyLink } from './styled';

export const PrivacyPolicy = () => {
  return (
    <PrivacyLink 
      href={privacyPolicyPdf}
      target="_blank" 
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      политикой конфиденциальности
    </PrivacyLink>
  )
}