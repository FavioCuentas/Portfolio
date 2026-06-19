import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Favio | Portafolio Profesional",
  description: "Portafolio profesional de Favio, destacando experiencia, trayectoria y proyectos vanguardistas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="bg-glow"></div>
        <div className="bg-glow-2"></div>
        {children}
      </body>
    </html>
  );
}
