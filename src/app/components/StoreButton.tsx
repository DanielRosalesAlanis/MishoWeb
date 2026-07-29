type StoreButtonProps = {
  label: string;
  sublabel: string;
  store: "apple" | "google";
};

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.462 2.19-1.213 2.955-.822.84-2.058 1.49-3.09 1.406-.135-1.098.42-2.25 1.17-2.985.822-.855 2.223-1.485 3.133-1.376ZM20.4 17.235c-.51 1.185-.75 1.71-1.41 2.76-.93 1.47-2.235 3.3-3.855 3.315-1.44.015-1.815-.945-3.78-.93-1.965.015-2.37.945-3.81.93-1.62-.015-2.85-1.665-3.78-3.135C1.11 16.71.375 12.855 1.68 10.245c.915-1.83 2.55-2.985 4.335-3 1.47-.015 2.85 1.005 3.75 1.005.9 0 2.58-1.245 4.35-1.065.735.03 2.805.3 4.14 2.235-1.08.675-2.16 2.01-2.145 3.87.015 2.235 1.95 2.985 2.29 3.03Z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 2.5v19l16-9.5-16-9.5Z" fill="currentColor" fillOpacity="0.9" />
    </svg>
  );
}

export function StoreButton({ label, sublabel, store }: StoreButtonProps) {
  const Icon = store === "apple" ? AppleIcon : GooglePlayIcon;

  return (
    <span
      className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-misho-border bg-misho-card2 px-5 py-3 opacity-50"
      title="Próximamente"
      aria-disabled
    >
      <Icon />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-xs text-misho-muted">{sublabel}</span>
        <span className="text-sm font-bold">{label}</span>
      </span>
    </span>
  );
}
