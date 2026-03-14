import type { FC } from 'react';
import { LoaderSvg } from './styled';

export const Loader: FC = () => (
  <LoaderSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="30 70"
      opacity="0.5"
    />
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="30 70"
      strokeDashoffset="0"
    />
  </LoaderSvg>
);
