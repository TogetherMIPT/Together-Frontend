import { useState, type FC } from 'react';
import { useNavigate } from 'react-router';
import {
  Hero,
  HeroActions,
  HeroSub,
  HeroTitle,
  Container,
  Section,
  Step,
  Steps,
  Subtitle,
  Title,
  FAQAnswer,
  FAQItem,
  FAQList,
  FAQQuestion,
  FeatureCard,
  FeatureDesc,
  FeatureIcon,
  FeatureTitle,
  FeaturesGrid,
  Footer,
  CTASection,
  Disclaimer,
} from './styled';
import { Button } from '../../components/Button';

// --- Data ---
const features = [
  { icon: '🧠', title: 'ИИ-диалоги с психологической базой', desc: 'Техники КПТ, майндфулнесс и эмоциональной регуляции. Эмпатичные ответы, а не шаблоны.' },
  { icon: '📊', title: 'Умные опросы настроения', desc: 'Короткие ежедневные чекины. ИИ выявляет триггеры, адаптивно меняя вопросы.' },
  { icon: '📈', title: 'Трекер прогресса на ИИ', desc: 'Визуальная динамика, сработавшие техники и персональные цели на неделю.' },
  { icon: '👩‍⚕️', title: 'Создано с психологами', desc: 'Методология согласована с практиками. ИИ не ставит диагнозов и уважает границы.' },
];

const steps = [
  'Пройдите первый чекин (2 мин). ИИ оценит состояние и подберёт стартовый план.',
  'Общайтесь в своём темпе. Бот запоминает контекст и возвращает вас к важным темам.',
  'Получайте еженедельные отчёты. Графики, инсайты и рекомендации по развитию.'
];

const faq = [
  { q: 'ИИ заменит психолога?', a: 'Нет. Бот – инструмент самопомощи и мониторинга. Для клинических состояний мы рекомендуем работу с лицензированным специалистом.' },
  { q: 'Как защищены мои переписки?', a: 'Данные шифруются на устройстве и в транзите. Аналитика работает на обезличенных метаданных.' },
  { q: 'На чём основаны опросы?', a: 'На валидированных шкалах (PANAS, адаптированные PHQ-9/GAD-7), дневниках когнитивных искажений и протоколах эмоциональной регуляции.' },
];

// --- Components ---
export const Landing: FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  }

  return (
    <main>
      <Hero>
        <Container>
          <HeroTitle>
            Togehter<br />
            -<br />
            Ваш персональный ИИ-психолог,<br />
            который понимает вас
          </HeroTitle>
          <HeroSub>
            Ежедневные опросы настроения, ИИ-аналитика паттернов и наглядный трекер прогресса.
            Создано при участии лицензированных психологов на основе доказательных методик.
          </HeroSub>
          <HeroActions>
            <Button onClick={navigateToLogin}>Начать бесплатно</Button>
          </HeroActions>
        </Container>
      </Hero>

      <Section>
        <Container>
          <Title>Забота о ментальном здоровье не должна быть сложной</Title>
          <Subtitle>
            Традиционная терапия требует времени, записи за недели вперёд и часто оставляет без понимания: «А есть ли прогресс?». Мы объединили эмпатию психологов и точность алгоритмов, чтобы вы могли отслеживать своё состояние в реальном времени и получать поддержку 24/7.
          </Subtitle>
        </Container>
      </Section>

      <Section style={{ background: '#F1F5F9' }}>
        <Container>
          <Title>Всё, что нужно для осознанной работы над собой</Title>
          <FeaturesGrid>
            {features.map((f, i) => (
              <FeatureCard key={i}>
                <FeatureIcon>{f.icon}</FeatureIcon>
                <FeatureTitle>{f.title}</FeatureTitle>
                <FeatureDesc>{f.desc}</FeatureDesc>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </Section>

      <Section>
        <Container $narrow>
          <Title>3 шага к стабильному эмоциональному фону</Title>
          <Steps>
            {steps.map((s, i) => (
              <Step key={i}>{s}</Step>
            ))}
          </Steps>
        </Container>
      </Section>

      <Section>
        <Container $narrow>
          <Title>Частые вопросы</Title>
          <FAQList>
            {faq.map((item, i) => (
              <FAQItem key={i} $open={openFAQ === i}>
                <FAQQuestion $open={openFAQ === i} onClick={() => setOpenFAQ(openFAQ === i ? null : i)} aria-expanded={openFAQ === i}>
                  {item.q}
                </FAQQuestion>
                <FAQAnswer $open={openFAQ === i}>{item.a}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQList>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <Title>Начните заботиться о себе уже сегодня</Title>
            <Subtitle>Бесплатный доступ на 7 дней. Без привязки карты.</Subtitle>
            <HeroActions>
              <Button variant="secondary" onClick={navigateToLogin}>Открыть доступ</Button>
            </HeroActions>
          </CTASection>
        </Container>
      </Section>

      <Footer>
        <Container>
          <p>© {new Date().getFullYear()} MindTrack AI. Все права защищены.</p>
          <Disclaimer>
            Приложение не является медицинским устройством и не заменяет очную психотерапию или психиатрическую помощь. При острых состояниях обращайтесь к специалистам.
          </Disclaimer>
        </Container>
      </Footer>
    </main>
  );
};
