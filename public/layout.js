import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Atecelectric | Ingeniería Eléctrica, Electrónica y Telecomunicaciones",
  description:
    "Soluciones modernas en ingeniería eléctrica, electrónica y telecomunicaciones para empresas. Innovación, confianza y tecnología a tu alcance.",
  keywords:
    "ingeniería eléctrica, electrónica, telecomunicaciones, proyectos eléctricos, automatización, Atecelectric",
  openGraph: {
    title: "Atecelectric",
    description:
      "Soluciones modernas en ingeniería eléctrica, electrónica y telecomunicaciones.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
