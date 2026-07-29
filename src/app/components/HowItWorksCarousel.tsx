const PASOS = [
  {
    numero: "01",
    title: "Registra un movimiento",
    description:
      "Ingreso, gasto o ahorro — un monto, una categoría y listo. Menos de 10 segundos.",
  },
  {
    numero: "02",
    title: "Misho hace las cuentas",
    description:
      "Tu balance disponible se actualiza solo. Los gastos a crédito se muestran, pero no restan hasta que pagas la tarjeta.",
  },
  {
    numero: "03",
    title: "Revisa tu Dashboard",
    description:
      "Ingresos, gastos y ahorro del mes, de un vistazo. Sin hojas de cálculo, sin fórmulas.",
  },
];

export function HowItWorksCarousel() {
  return (
    <div className="relative">
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible">
        {PASOS.map((paso) => (
          <div
            key={paso.numero}
            className="group w-[80%] shrink-0 snap-center rounded-2xl border border-misho-border bg-misho-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-misho-white/30 sm:w-auto"
          >
            <span className="text-3xl font-black text-misho-border transition-colors duration-300 group-hover:text-misho-white/20">
              {paso.numero}
            </span>
            <h3 className="mt-3 font-bold">{paso.title}</h3>
            <p className="mt-2 text-sm text-misho-muted">{paso.description}</p>
          </div>
        ))}
      </div>

      {/* Affordance hint for the swipeable mobile carousel */}
      <p className="mt-2 text-center text-xs text-misho-muted sm:hidden">
        Desliza para ver los siguientes pasos →
      </p>
    </div>
  );
}
