import type { FC, SVGProps } from "react"

export const ControlLow: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <path d="M9 9h.01" />
    <path d="M15 9h.01" />
    <path d="M12 12l-2-2" />
    <path d="M12 12l2-2" />
  </svg>
);
