import type { FC, SVGProps } from "react"

export const MoodFace: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg 
        width={24} 
        height={24} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#f59e0b" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
        {/* Индикатор статуса в углу */}
        <circle cx="18" cy="6" r="3" fill="currentColor" opacity="0.5" />
      </svg>
);
