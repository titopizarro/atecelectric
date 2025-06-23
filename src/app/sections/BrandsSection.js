"use client";

import Container from "./Container";
import Image from "next/image";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const brands = [
  {
    name: "ABB",
    image: "/brands/abb.webp",
    alt: "Logo de ABB",
  },
  {
    name: "Arduino",
    image: "/brands/arduino.webp",
    alt: "Logo de Arduino",
  },
  {
    name: "Autonics",
    image: "/brands/autonics.webp",
    alt: "Logo de Autonics",
  },
  {
    name: "Delta",
    image: "/brands/delta.webp",
    alt: "Logo de Delta",
  },
  {
    name: "Dexson",
    image: "/brands/dexson.webp",
    alt: "Logo de Dexson",
  },
  {
    name: "Fluke",
    image: "/brands/fluke.webp",
    alt: "Logo de Fluke",
  },
  {
    name: "HT",
    image: "/brands/ht.webp",
    alt: "Logo de HT",
  },
  {
    name: "LSIS",
    image: "/brands/lsis.webp",
    alt: "Logo de LSI",
  },
  {
    name: "Schneider Electric",
    image: "/brands/schneider.webp",
    alt: "Logo de Schneider Electric",
  },
  {
    name: "Siemens",
    image: "/brands/siemens.webp",
    alt: "Logo de Siemens",
  },
  {
    name: "Smart Home",
    image: "/brands/smarthome.webp",
    alt: "Logo de Smart Home",
  },
];

export default function BrandsSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      className="py-24 bg-gray-50 overflow-hidden"
      aria-labelledby="brands-heading"
    >
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <h2
            id="brands-heading"
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--accent-orange)] leading-tight"
          >
            Marcas
          </h2>
          <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-4xl">
            Trabajamos con las mejores marcas del mercado para garantizar la
            calidad y eficiencia en cada proyecto.
          </p>
        </div>

        {/* Grid de marcas en múltiples filas */}
        <div className="">
          {/* Primera fila - 4 marcas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
            {brands.slice(0, 4).map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>

          {/* Segunda fila - 4 marcas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
            {brands.slice(4, 8).map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>

          {/* Tercera fila - 3 marcas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
            {brands.slice(8, 11).map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
        </div>

        {/* Carrusel infinito */}
        {/* <div className="relative w-full overflow-hidden mr-[2rem] ml-[2rem] px-[2rem]">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {brands.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
            {brands.map((brand) => (
              <BrandCard key={`${brand.name}-duplicate`} brand={brand} />
            ))}
          </motion.div>
        </div> */}
      </Container>
    </section>
  );
}

const BrandCard = ({ brand }) => {
  return (
    <div
      key={brand.name}
      className="relative w-32 h-32 flex-shrink-0 transition-all duration-300 p-4"
    >
      <Image
        src={brand.image}
        alt={brand.alt}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 176px, 176px"
        priority={false}
      />
    </div>
  );
};
