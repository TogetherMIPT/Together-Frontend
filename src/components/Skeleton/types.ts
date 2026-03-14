import type { CSSProperties } from "react";

export interface SkeletonProps {
  /** Ширина скелетона (например, '100px', '50%', 100) */
  width?: CSSProperties['width'];
  
  /** Высота скелетона (например, '20px', '1em', 20) */
  height?: CSSProperties['height'];
  
  /** Если true, делает скелетон круглым (border-radius: 50%) */
  circle?: boolean;
  
  /** Кастомный border-radius (игнорируется, если circle=true) */
  borderRadius?: CSSProperties['borderRadius'];
  
  /** Дополнительные CSS-классы */
  className?: string;
}