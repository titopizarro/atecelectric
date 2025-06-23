"use client";

import Container from "./Container";
import { FaBolt, FaMicrochip, FaBroadcastTower } from "react-icons/fa";

const services = [
  {
    title: "Ingeniería Eléctrica",
    desc: "Soluciones integrales para proyectos eléctricos industriales y comerciales.",
    icon: <FaBolt className="text-3xl text-[var(--accent-orange)]" />,
  },
  {
    title: "Electrónica",
    desc: "Automatización, control y sistemas inteligentes para tu empresa.",
    icon: <FaMicrochip className="text-3xl text-[var(--accent-orange)]" />,
  },
  {
    title: "Telecomunicaciones",
    desc: "Infraestructura y soporte para redes de comunicación modernas.",
    icon: <FaBroadcastTower className="text-3xl text-[var(--accent-orange)]" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[var(--primary-blue)]">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--accent-orange)] leading-tight">
            Servicios
          </h2>
          <p className="text-balance text-lg md:text-2xl font-normal text-white max-w-4xl">
            Ofrecemos diseño, instalación y mantenimiento en sistemas
            eléctricos, electrónicos y de telecomunicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-start bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-200"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[var(--accent-orange)]">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
