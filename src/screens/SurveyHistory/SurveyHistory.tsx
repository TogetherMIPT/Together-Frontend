import type { FC } from "react";
import {
  LoadingSpinner,
  ErrorBox,
  PageContainer,
  PageTitle,
  Grid,
  Card,
  SectionTitle,
  ChartContainer,
  TextContent
} from './styled';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useGetSurveyResults } from "../../hooks/data/useGetSurveyResults";
import { HeaderControls } from "../../components/HeaderControls";

export const SurveyHistory: FC = () => {
  const { data, isLoading, error } = useGetSurveyResults();

  if (isLoading) {
    return <LoadingSpinner>Загрузка данных опроса...</LoadingSpinner>;
  }

  if (error || !data) {
    return (
      <ErrorBox>
        Произошла ошибка при загрузке данных: {(error as Error)?.message}
      </ErrorBox>
    );
  }

  // Подготовка данных для графика
  const chartData = data.surveys.map((survey) => ({
    name: new Date(survey.creation_datetime).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
    }),
    mood: survey.mood_answer,
    anxiety: survey.anxiety_answer,
    control: survey.control_answer,
  }));

  return (
    <PageContainer>
      <HeaderControls />
      <PageTitle>Результаты опроса</PageTitle>

      <Grid>
        {/* Левая колонка: График и Рекомендации */}
        <div>
          <Card>
            <SectionTitle>Динамика показателей</SectionTitle>
            <ChartContainer>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="mood"
                    stroke="#8884d8"
                    strokeWidth={2}
                    name="Настроение"
                  />
                  <Line
                    type="monotone"
                    dataKey="anxiety"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    name="Тревожность"
                  />
                  <Line
                    type="monotone"
                    dataKey="control"
                    stroke="#ffc658"
                    strokeWidth={2}
                    name="Контроль"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </Card>

          <Card>
            <SectionTitle>Рекомендации</SectionTitle>
            <TextContent>{data.recommendations}</TextContent>
          </Card>
        </div>

        {/* Правая колонка: Саммари */}
        <div>
          <Card>
            <SectionTitle>Анализ</SectionTitle>
            <TextContent>{data.summary}</TextContent>
          </Card>
          
          {/* Дополнительная статистика (опционально) */}
          <Card style={{ background: '#f9f9f9' }}>
             <SectionTitle style={{ fontSize: '1.2rem' }}>Статистика</SectionTitle>
             <p>Всего опросов: <strong>{data.surveys.length}</strong></p>
             <p>Последний опрос: <strong>{new Date(data.surveys[data.surveys.length - 1].creation_datetime).toLocaleDateString()}</strong></p>
          </Card>
        </div>
      </Grid>
    </PageContainer>
  );
};
