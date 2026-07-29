import Image from "next/image";
import { Accordion } from "./components/Accordion";
import { Eyebrow } from "./components/Eyebrow";
import { HowItWorksCarousel } from "./components/HowItWorksCarousel";
import { Reveal } from "./components/Reveal";
import { SocialButton } from "./components/SocialButton";
import { StoreButton } from "./components/StoreButton";

const MODULOS = [
  {
    title: "Dashboard",
    summary: "Tu balance del mes, de un vistazo, sin hacer cuentas.",
    bullets: [
      "Balance disponible calculado automáticamente",
      "Comparativa de ingresos, gastos y ahorro del mes",
      "Consejos de Misho según tu día de pago",
      "Indicador rápido de deudas pendientes",
    ],
  },
  {
    title: "Ingresos",
    summary: "Sueldo fijo o variable, sin formularios eternos.",
    bullets: [
      "Alta rápida: monto, categoría y fecha",
      "Ingresos fijos que se registran solos cada quincena o mes",
      "Categorías listas: freelance, ventas, regalos, reembolsos",
    ],
  },
  {
    title: "Gastos",
    summary: "Débito, efectivo o crédito: Misho sabe qué resta y qué no.",
    bullets: [
      "Los gastos a crédito se muestran pero no afectan tu balance hasta pagar la tarjeta",
      "Categorías: comida, transporte, compras, diversión, servicios",
      "Gastos fijos recurrentes (renta, suscripciones) automáticos",
    ],
  },
  {
    title: "Ahorro y Deudas",
    summary: "Lo que apartas, y lo que debes o lo que te deben. Todo siempre a la vista.",
    bullets: [
      "Registra tu ahorro del mes y consulta el acumulado histórico",
      "Lleva control de lo que debes y lo que te deben",
      "Marca una deuda como resuelta y se registra el movimiento real",
    ],
  },
];

const NAV_LINKS = [
  { href: "#que-es", label: "Qué es" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#que-puedes-hacer", label: "Módulos" },
  { href: "#privacidad", label: "Privacidad" },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-misho-border/60 bg-misho-bg/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="group flex items-center gap-2">
            <Image
              src="/misho-logo.png"
              alt="Misho"
              width={32}
              height={25}
              className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
            />
            <span className="font-bold tracking-tight">Misho</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-misho-muted sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-misho-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <span className="rounded-full border border-misho-border px-3 py-1 text-xs text-misho-muted">
            Próximamente
          </span>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="animate-glow-pulse pointer-events-none absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl sm:h-96 sm:w-96"
          />

          <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center sm:py-28">
            <Eyebrow>Control de gastos personal</Eyebrow>

            <Image
              src="/misho-full.png"
              alt="Misho, la mascota"
              width={220}
              height={168}
              priority
              className="animate-float"
            />

            <h1 className="max-w-2xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-6xl">
              Control de gastos, sin complicaciones.
            </h1>

            <p className="max-w-xl text-balance text-misho-muted">
              Misho es una app para llevar tus finanzas personales de forma simple
              y privada — sin vinculación bancaria, sin funciones de más. Solo lo
              necesario para saber en qué se va tu dinero.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <StoreButton store="apple" label="App Store" sublabel="Descárgalo en" />
              <StoreButton store="google" label="Google Play" sublabel="Disponible en" />
            </div>
          </div>
        </section>

        {/* Qué es Misho */}
        <section id="que-es" className="mx-auto w-full max-w-3xl scroll-mt-20 px-6 py-16 text-center">
          <Reveal>
            <Eyebrow>Nuestro origen</Eyebrow>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Nació de un Excel de tres hojas
            </h2>
            <p className="mt-4 text-misho-muted">
              Dashboard, Ingresos y Egresos: así de simple era el control de
              gastos de su creador, y así de simple sigue siendo Misho. Cada
              pantalla y cada dato que te pide tiene que justificarse por sí
              mismo; si no, no entra en la app.
            </p>
          </Reveal>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16">
          <Reveal className="text-center">
            <Eyebrow>Tres pasos</Eyebrow>
            <h2 className="text-2xl font-bold sm:text-3xl">Cómo funciona</h2>
          </Reveal>

          <Reveal delayMs={100} className="mt-10">
            <HowItWorksCarousel />
          </Reveal>
        </section>

        {/* Qué puedes hacer / Módulos */}
        <section id="que-puedes-hacer" className="mx-auto w-full max-w-3xl scroll-mt-20 px-6 py-16">
          <Reveal className="text-center">
            <Eyebrow>Qué puedes hacer</Eyebrow>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Cuatro pantallas. Nada más.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-misho-muted">
              Toca cada una para ver qué resuelve: sin menús escondidos ni
              configuraciones que no vas a usar.
            </p>
          </Reveal>

          <Reveal delayMs={100} className="mt-10">
            <Accordion items={MODULOS} />
          </Reveal>
        </section>

        {/* Privacidad */}
        <section id="privacidad" className="mx-auto w-full max-w-3xl scroll-mt-20 px-6 py-16 text-center">
          <Reveal>
            <Eyebrow>Tus datos, en tu dispositivo</Eyebrow>
            <h2 className="text-2xl font-bold sm:text-3xl">Privado por diseño</h2>
            <p className="mt-4 text-misho-muted">
              Misho guarda tu información localmente por default, no hay
              vinculación bancaria automática ni se piden más datos de los
              indispensables. Si quieres respaldo en la nube y sincronizar entre
              dispositivos, esa será una opción, no un requisito.
            </p>
          </Reveal>
        </section>

        {/* Contacto + redes */}
        <section id="contacto" className="mx-auto w-full max-w-3xl scroll-mt-20 px-6 py-16 text-center">
          <Reveal className="flex flex-col items-center gap-8">
            <div>
              <Eyebrow>Sigue el desarrollo</Eyebrow>
              <h2 className="text-2xl font-bold sm:text-3xl">Hablemos</h2>
              <p className="mx-auto mt-4 max-w-md text-misho-muted">
                ¿Dudas, feedback o quieres ser de los primeros en probarla?
                Escríbe al equipo de Misho.
              </p>
            </div>

            <a
              href="mailto:contacto.mishoapp@gmail.com"
              className="rounded-xl bg-misho-white px-6 py-3 text-sm font-bold text-misho-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
            >
              contacto.mishoapp@gmail.com
            </a>

            <div className="flex items-center gap-3">
              <SocialButton
                icon="instagram"
                label="Instagram"
                href="https://www.instagram.com/immishoapp/"
              />
              <SocialButton 
              icon="tiktok" 
              label="TikTok"
              href="https://www.tiktok.com/@immishoapp" />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-misho-border/60 px-6 py-8 text-center text-xs text-misho-muted">
        © {new Date().getFullYear()} Misho — Todos los derechos reservados.
      </footer>
    </>
  );
}
