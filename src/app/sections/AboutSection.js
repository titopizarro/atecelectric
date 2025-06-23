"use client";

import Container from "./Container";
import Image from "next/image";
import { getImagePath } from "@/app/utils/getImagePath";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--accent-orange)] leading-tight">
              Sobre Nosotros
            </h2>
            <p className="text-lg md:text-2xl text-gray-500 mb-8 max-w-xl">
              Somos Atecelectric, expertos en proyectos eléctricos y
              tecnológicos para empresas modernas. Nos especializamos en brindar
              soluciones innovadoras y confiables en ingeniería eléctrica,
              electrónica y telecomunicaciones.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src={getImagePath("/atecelectric_logo.png")}
              alt="Equipo Atec Electric"
              width={420}
              height={320}
              className="rounded-2xl shadow-xl object-cover w-full max-w-[380px] h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
