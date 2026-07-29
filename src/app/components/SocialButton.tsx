type SocialButtonProps = {
  label: string;
  href?: string;
  icon: "instagram" | "tiktok";
};

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 3v10.5a3 3 0 1 1-2.5-2.96V7.5a5.5 5.5 0 1 0 5 5.48V9.2a6.8 6.8 0 0 0 3.5 1V7.2A4.2 4.2 0 0 1 16 3h-2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICONS = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
};

export function SocialButton({ label, href, icon }: SocialButtonProps) {
  const Icon = ICONS[icon];
  const disabled = !href;

  const className = disabled
    ? "flex cursor-not-allowed items-center gap-2 rounded-full border border-misho-border px-5 py-3 opacity-50"
    : "flex items-center gap-2 rounded-full border border-misho-border px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-misho-white/40 hover:bg-misho-white/5";

  if (disabled) {
    return (
      <span className={className} title="Próximamente" aria-disabled>
        <Icon />
        <span className="text-sm font-bold">{label}</span>
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <Icon />
      <span className="text-sm font-bold">{label}</span>
    </a>
  );
}
