import Image from "next/image";
import { StoreButton } from "./components/StoreButton";
import { ModuleCard } from "./components/ModuleCard";

const MODULOS = [
  {
    title: "Dashboard",
    description:
      "Tu balance disponible del mes, de un vistazo, sin tener que hacer cuentas.",
  },
  {
    title: "Ingresos",
    description: "Sueldo fijo o variable, todo en un solo lugar, sin fricción.",
  },
  {
    title: "Gastos",
    description:
      "Débito, efectivo o crédito — Misho sabe qué resta de tu balance y qué no.",
  },
  {
    title: "Ahorro y Deudas",
    description: "Lo que apartas y lo que debes (o te deben), siempre a la vista.",
  },
];

export default function Home() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <Image src="/misho-logo.png" alt="Misho" width={32} height={32} />
          <span className="font-bold tracking-tight">Misho</span>
        </div>
        <span className="rounded-full border border-misho-border px-3 py-1 text-xs text-misho-muted">
          Próximamente
        </span>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center sm:py-24">
          <Image
            src="/misho-full.png"
            alt="Misho, la mascota"
            width={160}
            height={160}
            priority
          />

          <h1 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Control de gastos, sin complicaciones.
          </h1>

          <p className="max-w-xl text-balance text-misho-muted">
            Misho es una app para llevar tus finanzas personales de forma simple
            y privada. Sin vinculación bancaria, sin funciones de más — solo lo
            necesario para saber en qué se va tu dinero.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <StoreButton label="App Store" sublabel="Descárgalo en" />
            <StoreButton label="Google Play" sublabel="Disponible en" />
          </div>
        </section>

        {/* Qué es Misho */}
        <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">
            Nació de un Excel de tres hojas
          </h2>
          <p className="mt-4 text-misho-muted">
            Dashboard, Ingresos y Egresos. Así de simple era el control de
            gastos de su creador — y así de simple sigue siendo Misho. Cada
            pantalla y cada dato que te pide tiene que justificarse por sí
            mismo; si no, no entra en la app.
          </p>
        </section>

        {/* Módulos */}
        <section className="mx-auto w-full max-w-5xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold">
            Cuatro pantallas. Nada más.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MODULOS.map((modulo) => (
              <ModuleCard key={modulo.title} {...modulo} />
            ))}
          </div>
        </section>

        {/* Privacidad */}
        <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">Tus datos, en tu dispositivo</h2>
          <p className="mt-4 text-misho-muted">
            Misho guarda tu información localmente por default — no hay
            vinculación bancaria automática ni se piden más datos de los
            indispensables. Si quieres respaldo en la nube y sincronizar entre
            dispositivos, esa será una opción, no un requisito.
          </p>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6 py-8 text-center text-xs text-misho-muted">
        © {new Date().getFullYear()} Misho. Todos los derechos reservados.
      </footer>
    </>
  );
}
