type StoreButtonProps = {
  label: string;
  sublabel: string;
};

export function StoreButton({ label, sublabel }: StoreButtonProps) {
  return (
    <button
      type="button"
      disabled
      title="Próximamente"
      className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-misho-border bg-misho-card2 px-5 py-3 opacity-50"
    >
      <span aria-hidden className="text-2xl">
        {label === "App Store" ? "" : "▶"}
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-xs text-misho-muted">{sublabel}</span>
        <span className="text-sm font-bold">{label}</span>
      </span>
    </button>
  );
}
