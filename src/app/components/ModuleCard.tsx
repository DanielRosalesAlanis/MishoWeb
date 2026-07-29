type ModuleCardProps = {
  title: string;
  description: string;
};

export function ModuleCard({ title, description }: ModuleCardProps) {
  return (
    <div className="rounded-2xl border border-misho-border bg-misho-card p-6">
      <h3 className="font-bold text-misho-orange">{title}</h3>
      <p className="mt-2 text-sm text-misho-muted">{description}</p>
    </div>
  );
}
