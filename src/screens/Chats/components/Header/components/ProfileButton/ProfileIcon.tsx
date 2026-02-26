
export const ProfileIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2"/>
    <circle cx="12" cy="9" r="3" fill="currentColor"/>
    <path
      d="M20 20C20 16.6863 17.3137 14 14 14H10C6.68629 14 4 16.6863 4 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
