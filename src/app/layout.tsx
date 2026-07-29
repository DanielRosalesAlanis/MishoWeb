import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Misho — Control de gastos personales",
  description:
    "Misho es una app de control de gastos personales simple, privada y local-first. Próximamente en App Store y Google Play.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-misho-bg text-misho-white font-sans">
        {children}
      </body>
    </html>
  );
}
