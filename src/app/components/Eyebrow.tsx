export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-misho-muted uppercase">
      <span className="h-px w-4 bg-misho-border" aria-hidden />
      {children}
      <span className="h-px w-4 bg-misho-border" aria-hidden />
    </p>
  );
}
