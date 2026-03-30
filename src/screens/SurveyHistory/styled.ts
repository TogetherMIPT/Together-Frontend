import styled from "styled-components";

 export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #2c3e50;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 0 20px;

  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 30px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #34495e;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 10px;
`;

export const TextContent = styled.div`
  line-height: 1.6;
  white-space: pre-wrap; /* Сохраняет переносы строк из JSON */
  color: #555;
`;

export const ChartContainer = styled.div`
  height: 400px;
  width: 100%;
  position: relative;

  /* Убираем стандартный браузерный фокус у SVG */
  svg {
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
    user-select: none;

    &:focus {
      outline: none !important;
    }

    &:focus-visible {
      outline: none !important;
    }
  }

  /* Убираем обводку у всех элементов Recharts */
  .recharts-surface,
  .recharts-wrapper,
  .recharts-layer,
  .recharts-line,
  .recharts-curve,
  .recharts-dot,
  .recharts-active-dot {
    outline: none !important;
    box-shadow: none !important;
  }

  /* Принудительно убираем outline при фокусе */
  [tabindex="0"]:focus,
  [tabindex="-1"]:focus {
    outline: none !important;
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-size: 1.2rem;
  color: #7f8c8d;
`;

export const ErrorBox = styled.div`
  background-color: #fee;
  color: #c0392b;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #fab1a0;
`;
