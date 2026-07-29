import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad — Misho",
  description: "Aviso de Privacidad de Misho.",
};

const ACTUALIZADO = "29 de julio de 2026";

export default function PrivacidadPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-black">Aviso de Privacidad</h1>
      <p className="mt-2 text-sm text-misho-muted">
        Última actualización: {ACTUALIZADO}
      </p>

      {/* Nota: Sugerencia de mantener un aviso para revisión final por un abogado */}
      {/* <div className="mt-4 rounded-md border border-yellow-500/30 bg-yellow-500/10 p-4 text-xs text-yellow-200/70">Este es un borrador legal. Se recomienda revisión de un abogado en México.</div> */}

      <div className="mt-10 flex flex-col gap-8 text-misho-muted [&_h2]:mb-2 [&_h2]:mt-0 [&_h2]:font-bold [&_h2]:text-misho-white [&_p]:leading-relaxed [&_li]:leading-relaxed">
        
        <section>
          <p>
            En cumplimiento con las disposiciones legales aplicables en materia de protección de datos, incluyendo la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante, la &quot;LFPDPPP&quot;) vigente en los Estados Unidos Mexicanos, la aplicación móvil Misho (en adelante, &quot;Misho&quot;, &quot;Nosotros&quot; o la &quot;Aplicación&quot;) emite el presente Aviso de Privacidad.
          </p>
          <p className="mt-3">
            Este documento detalla cómo recopilamos, utilizamos, almacenamos y protegemos su información personal, así como los límites de nuestra responsabilidad sobre la misma.
          </p>
          <p className="mt-3">
            Al descargar, acceder y utilizar Misho, el usuario (en adelante, el &quot;Usuario&quot; o &quot;Usted&quot;) acepta de manera expresa los términos y condiciones descritos en el presente Aviso de Privacidad.
          </p>
        </section>

        <section>
          <h2>1. Principio de Privacidad desde el Diseño (Privacy by Design)</h2>
          <p>
            Misho es una aplicación de control de gastos personales diseñada para priorizar la privacidad. Por defecto, los datos financieros del Usuario se almacenan de forma local en su dispositivo. Misho <strong className="text-misho-white">no</strong> se vincula con instituciones bancarias, <strong className="text-misho-white">no</strong> vende datos a terceros y <strong className="text-misho-white">no</strong> muestra anuncios publicitarios.
          </p>
        </section>

        <section>
          <h2>2. Datos que recopilamos y finalidad del tratamiento</h2>
          <p>Para brindar nuestros servicios, recopilamos las siguientes categorías de datos:</p>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong className="text-misho-white">Datos de Cuenta e Identificación:</strong> Correo electrónico. Si el Usuario opta por el inicio de sesión mediante terceros (Google o Apple), recopilaremos el nombre y fotografía de perfil, sujetos a lo que dicho proveedor comparta. <em>Finalidad:</em> Creación, autenticación y gestión de la cuenta del Usuario.
            </li>
            <li>
              <strong className="text-misho-white">Datos Financieros (Autodeclarados):</strong> Ingresos, gastos, metas de ahorro y deudas que el Usuario ingresa manualmente. <em>Finalidad:</em> Permitir el funcionamiento principal de la Aplicación. (Misho nunca solicita ni tiene acceso a credenciales bancarias reales).
            </li>
            <li>
              <strong className="text-misho-white">Datos de Preferencias de Usuario (Onboarding):</strong> Tipo de ingresos (fijos o variables) y periodicidad de pago. <em>Finalidad:</em> Personalización de la experiencia y generación de recomendaciones internas.
            </li>
            <li>
              <strong className="text-misho-white">Datos de Suscripción (Misho Nube):</strong> Estado actual de la suscripción. <em>Finalidad:</em> Habilitar el acceso a funciones premium. La gestión de pagos se realiza íntegramente a través de Apple App Store o Google Play Store; <strong className="text-misho-white">Misho no recopila, procesa ni almacena datos de tarjetas de crédito o débito.</strong>
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Almacenamiento, transferencia y uso compartido de datos</h2>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="text-misho-white">Almacenamiento Local (Por defecto):</strong> Si el Usuario no activa &quot;Misho Nube&quot;, toda su información financiera y preferencias reside exclusivamente en el almacenamiento local (SQLite) de su dispositivo físico.
            </li>
            <li>
              <strong className="text-misho-white">Almacenamiento en la Nube (Misho Nube):</strong> Si el Usuario activa la suscripción a &quot;Misho Nube&quot;, sus datos financieros se sincronizarán mediante protocolos seguros con nuestro proveedor de backend (Supabase). Esta información se almacena con reglas de acceso estrictas (Row Level Security), garantizando que solo el Usuario autenticado pueda leer o modificar su información.
            </li>
            <li>
              <strong className="text-misho-white">Terceros Prestadores de Servicios:</strong> Misho comparte información estrictamente técnica y necesaria con terceros para operar: <em>Supabase</em> (para infraestructura de base de datos y autenticación) y <em>Google / Apple</em> (para sistemas de autenticación y procesamiento de pagos de suscripción).
            </li>
          </ul>
          <p className="mt-3">
            Misho <strong className="text-misho-white">no</strong> vende, alquila, ni cede datos personales o financieros a anunciantes, agencias de marketing ni entidades financieras.
          </p>
        </section>

        <section>
          <h2>4. Límites de responsabilidad y exención legal (Renuncia)</h2>
          <p>
            Al utilizar Misho, el Usuario comprende y acepta expresamente las siguientes limitaciones de responsabilidad, renunciando a cualquier acción legal, demanda o reclamación en contra de los desarrolladores, propietarios y afiliados de Misho:
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong className="text-misho-white">A. Responsabilidad sobre Datos Locales:</strong> El almacenamiento local de datos depende de la integridad del dispositivo del Usuario. Misho se exime de toda responsabilidad por la pérdida, corrupción o eliminación de datos derivados del robo, extravío, daño físico del dispositivo, fallos del sistema operativo, o la desinstalación voluntaria o involuntaria de la Aplicación. El respaldo de la información local es responsabilidad única y exclusiva del Usuario.
            </li>
            <li>
              <strong className="text-misho-white">B. Responsabilidad sobre Datos en la Nube (Misho Nube):</strong> Aunque Misho utiliza proveedores de infraestructura de primer nivel (Supabase), los servicios en la nube se proporcionan &quot;tal cual&quot; (<em>as is</em>). Misho no garantiza la disponibilidad ininterrumpida de los servidores y se exime de cualquier responsabilidad por la pérdida temporal o permanente de datos en la nube causada por interrupciones del servicio, ataques cibernéticos, fallos de proveedores de terceros o causas de fuerza mayor. El Usuario asume el riesgo asociado al almacenamiento digital.
            </li>
            <li>
              <strong className="text-misho-white">C. Herramienta Informativa, no Asesoría Financiera:</strong> Misho es una herramienta de registro de datos autodeclarados. Ninguna recomendación, métrica o consejo mostrado en la Aplicación constituye asesoría financiera, contable o legal profesional. El Usuario libera a Misho de cualquier responsabilidad por decisiones financieras, pérdidas económicas o problemas fiscales que surjan del uso de la Aplicación.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Retención y eliminación de datos</h2>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="text-misho-white">Dispositivo Local:</strong> Los datos permanecen en el dispositivo hasta que el Usuario los elimine manualmente o desinstale la aplicación.
            </li>
            <li>
              <strong className="text-misho-white">Misho Nube:</strong> Si el Usuario cancela su suscripción, sus datos encriptados se mantendrán en nuestros servidores por un periodo de gracia máximo de 90 días naturales para facilitar la restauración en caso de renovación. Cumplido este plazo, los datos serán eliminados permanentemente.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Derechos ARCO (Específico para usuarios en México)</h2>
          <p>
            De conformidad con la LFPDPPP, los Usuarios residentes en México tienen derecho a ejercer sus Derechos ARCO:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><strong className="text-misho-white">Acceso:</strong> Conocer qué datos personales tenemos y para qué los utilizamos.</li>
            <li><strong className="text-misho-white">Rectificación:</strong> Solicitar la corrección de su información en caso de estar desactualizada, ser inexacta o incompleta.</li>
            <li><strong className="text-misho-white">Cancelación:</strong> Solicitar la eliminación de sus datos de nuestros registros cuando considere que no se utilizan conforme a los principios y deberes previstos en la normativa.</li>
            <li><strong className="text-misho-white">Oposición:</strong> Oponerse al uso de sus datos para fines específicos.</li>
          </ul>
          <p className="mt-3">
            Para ejercer cualquiera de estos derechos, o para revocar el consentimiento del tratamiento de sus datos, el Usuario deberá enviar una solicitud por escrito al correo:{" "}
            <a href="mailto:contacto.mishoapp@gmail.com" className="text-misho-white underline">
              contacto.mishoapp@gmail.com
            </a>
            . La solicitud deberá incluir: nombre completo del titular, descripción clara de los datos sobre los que busca ejercer el derecho, y prueba de identidad (correo asociado a la cuenta). Responderemos a su solicitud en los plazos establecidos por la Ley.
          </p>
          <p className="mt-3">
            Si el Usuario considera que su derecho a la protección de datos personales ha sido lesionado, tiene el derecho de acudir ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).
          </p>
          <p className="mt-3">
            Para usuarios que utilicen el inicio de sesión mediante Google o Apple, el acceso y revocación de permisos también puede gestionarse directamente desde la configuración de privacidad y seguridad de sus respectivas cuentas en dichas plataformas.
          </p>
        </section>

        <section>
          <h2>7. Menores de edad</h2>
          <p>
            Misho no está diseñada, ni dirigida a menores de 13 años (o la edad mínima legal en la jurisdicción del Usuario). No recopilamos conscientemente información personal de menores. Si detectamos que hemos recopilado datos de un menor sin el consentimiento verificable de sus tutores, procederemos a eliminar dicha información de inmediato.
          </p>
        </section>

        <section>
          <h2>8. Cambios a la Política de Privacidad</h2>
          <p>
            Misho se reserva el derecho de modificar o actualizar este Aviso de Privacidad en cualquier momento para atender novedades legislativas, políticas internas o nuevos requerimientos para la prestación de nuestro servicio. Cualquier modificación sustancial será notificada a través de la Aplicación y se reflejará actualizando la fecha de &quot;Última actualización&quot; en la parte superior de este documento. El uso continuado de la Aplicación tras dichos cambios constituirá su aceptación expresa.
          </p>
        </section>

        <section>
          <h2>9. Contacto</h2>
          <p>
            Para cualquier duda, aclaración o solicitud relacionada con este Aviso de Privacidad o el tratamiento de sus datos personales, por favor póngase en contacto con nuestro equipo de Privacidad a través de:{" "}
            <a href="mailto:contacto.mishoapp@gmail.com" className="text-misho-white underline">
              contacto.mishoapp@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}