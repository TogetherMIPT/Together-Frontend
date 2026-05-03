import styled from "styled-components";

export const Container = styled.section<{ $narrow?: boolean }>`
  max-width: ${({ $narrow }) => ($narrow ? '900px' : '1200px')};
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
`;

export const Section = styled.section`
  padding: 5rem 0;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem;
`;

// --- Hero ---
export const Hero = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #F8FAFC 0%, #E0E7FF 100%);
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  max-width: 900px;
`;

export const HeroSub = styled.p`
  font-size: 1.25rem;
  color: #64748B;
  max-width: 680px;
  margin-bottom: 2rem;
  margin-inline-end: auto;
  margin-inline-start: auto;
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

// --- Features ---
export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

export const FeatureCard = styled.div`
  background: #FFFFFF;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #E2E8F0;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const FeatureDesc = styled.p`
  color: #64748B;
  font-size: 0.95rem;
`;

// --- Steps ---
export const Steps = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  counter-reset: step;
  padding-inline-start: 0;
`;

export const Step = styled.li`
  position: relative;
  padding: 2rem;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #E2E8F0;
  list-style: none;
  &::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    top: -12px;
    left: 1.5rem;
    width: 28px;
    height: 28px;
    background: #6C63FF;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.9rem;
  }
`;

// --- FAQ ---
export const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const FAQItem = styled.div<{ $open: boolean }>`
  border-bottom: 1px solid #E2E8F0;
  &:last-child { border-bottom: none; }
`;

export const FAQQuestion = styled.button<{ $open: boolean }>`
  width: 100%;
  text-align: left;
  padding: 1.5rem 0;
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &::after {
    content: '${({ $open }) => ($open ? '−' : '+')}';
    font-size: 1.5rem;
    transition: transform 0.2s;
  }
`;

export const FAQAnswer = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: ${({ $open }) => ($open ? `0 0 1.5rem 0` : '0')};
  color: #64748B;
`;

export const CTASection = styled(Section)`
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  border-radius: 16px;
  margin-bottom: 3rem;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  border-top: 1px solid #E2E8F0;
  color: #64748B;
  font-size: 0.9rem;
`;

export const Disclaimer = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.7;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
