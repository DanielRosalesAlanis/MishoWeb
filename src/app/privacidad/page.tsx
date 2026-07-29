import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad — Misho",
  description: "Política de privacidad de Misho.",
};

const ACTUALIZADO = "29 de julio de 2026";

export default function PrivacidadPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-black">Política de privacidad</h1>
      <p className="mt-2 text-sm text-misho-muted">Última actualización: {ACTUALIZADO}</p>

      <div className="mt-10 flex flex-col gap-8 text-misho-muted [&_h2]:mb-2 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-misho-white [&_p]:leading-relaxed [&_li]:leading-relaxed">
        <section>
          <h2>Resumen</h2>
          <p>
            Misho es una app de control de gastos personales. Por diseño, tus datos financieros
            viven en tu dispositivo (almacenamiento local) — no vinculamos tu cuenta bancaria, no
            vendemos tus datos, y no mostramos anuncios. Esta política explica qué información
            recolectamos, para qué la usamos y cómo la controlas.
          </p>
        </section>

        <section>
          <h2>Qué datos recolectamos</h2>
          <p>
            <strong className="text-misho-white">Cuenta:</strong> correo electrónico, y si inicias
            sesión con Google o Apple, tu nombre y foto de perfil si el proveedor los comparte.
            Usamos esto únicamente para identificarte dentro de la app.
          </p>
          <p className="mt-3">
            <strong className="text-misho-white">Datos financieros que tú registras:</strong>{" "}
            ingresos, gastos, ahorro y deudas que capturas manualmente. Por default se guardan solo
            en tu dispositivo (SQLite local). Nunca accedemos a información bancaria real — Misho no
            se conecta a ningún banco.
          </p>
          <p className="mt-3">
            <strong className="text-misho-white">Preferencias de onboarding:</strong> tipo de
            ingreso (fijo/variable) y día de pago, que usamos para personalizar los consejos dentro
            de la app.
          </p>
          <p className="mt-3">
            <strong className="text-misho-white">Suscripción (solo si usas Misho Nube):</strong>{" "}
            estado de tu suscripción, gestionado a través de Apple/Google, para saber si tienes
            acceso a las funciones de nube.
          </p>
        </section>

        <section>
          <h2>Cuándo tus datos salen de tu dispositivo</h2>
          <p>
            Si nunca activas <strong className="text-misho-white">Misho Nube</strong>, tus datos
            financieros nunca salen de tu teléfono. Si activas Misho Nube, sincronizamos esos datos
            con nuestro backend (Supabase) para respaldarlos y mostrarlos en tus otros
            dispositivos. Ese respaldo está protegido por reglas de acceso que garantizan que solo
            tú puedes leer o modificar tu propia información.
          </p>
        </section>

        <section>
          <h2>Con quién compartimos información</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong className="text-misho-white">Supabase</strong> — nuestro proveedor de
              backend (autenticación y, si usas Misho Nube, respaldo de datos).
            </li>
            <li>
              <strong className="text-misho-white">Google / Apple</strong> — únicamente si eliges
              iniciar sesión con esos proveedores.
            </li>
            <li>
              <strong className="text-misho-white">Apple / Google (tiendas)</strong> — procesan el
              pago de Misho Nube directamente; nosotros no vemos ni guardamos tu información de
              tarjeta.
            </li>
          </ul>
          <p className="mt-3">No vendemos ni compartimos tus datos con anunciantes.</p>
        </section>

        <section>
          <h2>Cuánto tiempo guardamos tus datos</h2>
          <p>
            Los datos en tu dispositivo permanecen ahí hasta que tú los borres o desinstales la
            app. Si cancelas Misho Nube, conservamos tu respaldo en la nube por un periodo de
            gracia de hasta 90 días (por si te vuelves a suscribir) y después lo eliminamos.
          </p>
        </section>

        <section>
          <h2>Tus opciones</h2>
          <p>
            Puedes cerrar sesión, revocar el acceso de Google/Apple desde la configuración de esas
            cuentas, o pedirnos que eliminemos tu cuenta y datos de nuestros servidores escribiendo
            a{" "}
            <a href="mailto:contacto.mishoapp@gmail.com" className="text-misho-white underline">
              contacto.mishoapp@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>Menores de edad</h2>
          <p>Misho no está dirigida a menores de 13 años y no recolectamos deliberadamente datos de niños.</p>
        </section>

        <section>
          <h2>Cambios a esta política</h2>
          <p>
            Si hacemos cambios importantes, lo indicaremos actualizando la fecha al inicio de esta
            página.
          </p>
        </section>

        <section>
          <h2>Contacto</h2>
          <p>
            ¿Dudas sobre privacidad?{" "}
            <a href="mailto:contacto.mishoapp@gmail.com" className="text-misho-white underline">
              contacto.mishoapp@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
