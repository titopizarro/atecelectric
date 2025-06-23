"use client";
import Image from "next/image";

const porfolioImages = [
  {
    name: "Arrancadores Suaves Compactos, Alta Eficiencia Y Gama Avanzada ABB",
    image:
      "/porfolio/Arrancadores-Suaves-Compactos,-Alta-Eficiencia-Y-Gama-Avanzada-ABB.webp",
    alt: "Imagen del Arrancadores Suaves Compactos, Alta Eficiencia Y Gama Avanzada ABB",
  },
  {
    name: "Breaker Riel Din, Caja Moldeada y Caja Abierta ABB",
    image: "/porfolio/Breaker-Riel-Din,-Caja-Moldeada-y-Caja-Abierta-ABB.webp",
    alt: "Imagen del Breaker Riel Din, Caja Moldeada y Caja Abierta ABB",
  },
  {
    name: "Cintas Aislantes, Empalmes en Frío, Empalmes conectorizados y gel",
    image:
      "/porfolio/Cintas-Aislantes,-Empalmes-en-Frío,-Empalmes-conectorizados-y-gel.webp",
    alt: "Imagen de Cintas Aislantes, Empalmes en Frío, Empalmes conectorizados y gel",
  },
  {
    name: "Contactores Tripolares ABB con Bobina Multirango",
    image: "/porfolio/ContactoresTripolares-ABB-con-Bobina-Multirango.webp",
    alt: "Imagen de Contactores Tripolares ABB con Bobina Multirango",
  },
  {
    name: "Diseño, Construcción, Montaje y Puesta en Marcha de Tableros Eléctricos de Control Y Potencia",
    image:
      "/porfolio/Diseño,-Construcción,-Montaje-y-Puesta-en-Marcha-de-Tableros-Eléctricos-de-Control-Y-Potencia.webp",
    alt: "Imagen de Diseño, Construcción, Montaje y Puesta en Marcha de Tableros Eléctricos de Control Y Potencia",
  },
  {
    name: "Diseño, Construcción y Pruebas de Redes de Fibra Optica, Networking y Telecomunicaciones",
    image:
      "/porfolio/Diseño,-Construcción-y-Pruebas-de-Redes-de-Fibra-Optica-,-Networking-y-Telecomunicaciones.webp",
    alt: "Imagen de Diseño, Construcción y Pruebas de Redes de Fibra Optica, Networking y Telecomunicaciones",
  },
  {
    name: "Motores Electricos Alta Eficiencia ABB",
    image: "/porfolio/Motores-Electricos-Alta-Eficiencia-ABB.webp",
    alt: "Imagen de Motores Electricos Alta Eficiencia ABB",
  },
  {
    name: "Portafolio DeepSea Modulos Transferencia y Mantenedor de Carga Bateria",
    image:
      "/porfolio/Portafolio-DeepSea-Modulos-Transferencia-y-Mantenedor-de-Carga-Bateria.webp",
    alt: "Imagen del Portafolio DeepSea Modulos Transferencia y Mantenedor de Carga Bateria",
  },
  {
    name: "Portafolio Gabinetes Beacoup",
    image: "/porfolio/Portafolio-Gabinetes-Beacoup.webp",
    alt: "Imagen del Portafolio Gabinetes Beacoup",
  },
  {
    name: "Portafolio Productos B&R Automation",
    image: "/porfolio/Portafolio-Productos-B&R-Automation.webp",
    alt: "Imagen del Portafolio Productos B&R Automation",
  },
  {
    name: "Portafolio Productos DELTA Electronics",
    image: "/porfolio/Portafolio-Productos-DELTA-Electronics.webp",
    alt: "Imagen del Portafolio Productos DELTA Electronics",
  },
  {
    name: "Portafolio Productos LIFASA",
    image: "/porfolio/Portafolio-Productos-LIFASA.webp",
    alt: "Imagen del Portafolio Productos LIFASA",
  },
  {
    name: "Portafolio Productos Sistemas de Protecciones Eléctricas",
    image:
      "/porfolio/Portafolio-Productos-Sistemas-de-Protecciones-Eléctricas.webp",
    alt: "Imagen del Portafolio Productos Sistemas de Protecciones Eléctricas",
  },
  {
    name: "Reles Termicos y Guardamotores ABB",
    image: "/porfolio/Reles-Termicos-y-Guardamotores-ABB.webp",
    alt: "Imagen de Reles Termicos y Guardamotores ABB",
  },
  {
    name: "Variadores Velocidad 1F, 3F 220V-460V ABB DELTA LS y B&R Automation",
    image:
      "/porfolio/Variadores-Velocidad-1F,-3F-220V-460V-ABB-DELTA-LS-y-B&R-Automation.webp",
    alt: "Imagen de Variadores Velocidad 1F, 3F 220V-460V ABB DELTA LS y B&R Automation",
  },
];

const PorfolioSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2
            id="portfolio-heading"
            className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--accent-orange)] leading-tight"
          >
            Portafolio
          </h2>
          <p className="text-balance text-lg md:text-2xl font-normal text-white max-w-4xl">
            Descubre nuestra colección de productos y soluciones que impulsan la
            innovación en el sector eléctrico. Cada proyecto refleja nuestro
            compromiso con la excelencia y la tecnología de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {porfolioImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.image}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 3}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 bg-opacity-60 p-4">
                <p className="text-white text-lg">{image.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorfolioSection;
