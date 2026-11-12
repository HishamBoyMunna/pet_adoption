type IconProps = { className?: string };

export function PawPrint({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="12" cy="16.2" rx="4.5" ry="3.5" />
      <ellipse cx="5.1" cy="10.3" rx="2.1" ry="2.8" transform="rotate(-18 5.1 10.3)" />
      <ellipse cx="18.9" cy="10.3" rx="2.1" ry="2.8" transform="rotate(18 18.9 10.3)" />
      <ellipse cx="9.1" cy="6.1" rx="2" ry="2.6" />
      <ellipse cx="14.9" cy="6.1" rx="2" ry="2.6" />
    </svg>
  );
}

export function Heart({
  className,
  filled = false,
}: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.4 4.9a5.2 5.2 0 0 0-7.4 0L12 6l-1-1.1a5.2 5.2 0 1 0-7.4 7.3L12 20.5l8.4-8.3a5.2 5.2 0 0 0 0-7.3Z" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

export function Share({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 3 10.4 13.6" />
      <path d="M21 3l-6.6 18-4-8.4L2 8.6 21 3Z" />
    </svg>
  );
}

export function Close({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.1}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Sparkle({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2c.7 4.5 2.8 6.6 7.3 7.3-4.5.7-6.6 2.8-7.3 7.3-.7-4.5-2.8-6.6-7.3-7.3C9.2 8.6 11.3 6.5 12 2Z" />
      <path d="M19 15c.3 2 1.2 2.9 3.2 3.2-2 .3-2.9 1.2-3.2 3.2-.3-2-1.2-2.9-3.2-3.2 2-.3 2.9-1.2 3.2-3.2Z" />
    </svg>
  );
}
