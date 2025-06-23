"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { getImagePath } from "@/app/utils/getImagePath";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32 bg-[#b4c6e9] text-white overflow-hidden animate-fade-in-up">
      <Container>
        <section className="relative flex flex-col md:flex-row items-center justify-between text-white overflow-hidden gap-12">
          <div className="flex-1 flex flex-col items-start justify-center z-10">
            <Image
              src={getImagePath("/logo_2.webp")}
              alt="Atec Electric"
              width={300}
              height={140}
            />
            <h1 className="text-balance text-4xl md:text-6xl font-normal mb-6 text-left text-[var(--primary-blue)] drop-shadow-lg">
              Soluciones en Ingeniería{" "}
              <span className="font-extrabold -text-[var(--accent-orange)]">
                Eléctrica, Electrónica y Telecomunicaciones.
              </span>
            </h1>
            <p className="text-balance mb-8 text-lg md:text-2xl text-[var(--primary-blue)]/75 max-w-xl text-left">
              Innovación, confianza y tecnología para empresas modernas.
            </p>
            <Link href="#contacto">
              <button className="px-8 py-4 rounded-full bg-[var(--accent-orange)] text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-orange-500 transition-all duration-200">
                Contáctanos
              </button>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 w-full justify-center mt-12 md:mt-0">
            <Image
              src={getImagePath("/undraw_electricity_iu6d.svg")}
              alt="Atec Electric"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </section>
      </Container>
    </section>
  );
}
