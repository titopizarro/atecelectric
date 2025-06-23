"use client";

import Container from "./Container";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--accent-orange)] leading-tight">
              Contacto
            </h2>
            <p className="text-lg md:text-2xl text-gray-500 mb-8 max-w-xl">
              ¿Listo para impulsar tu proyecto? Contáctanos y recibe asesoría
              personalizada.
            </p>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="bg-white rounded-2xl shadow---xl p-8 w-full max-w-md border border---gray-100 flex flex-col gap-6">
              {/* Dirección */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="w-7 h-7 text-[var(--accent-orange)] flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg text-gray-800">
                    Cdla. La Aurora{" "}
                    <span className="text-gray-800 font-semibold">Machala</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-800 font-semibold">El Oro</span>
                  </div>
                  <div className="text-gray-600">
                    Calle Las Acacias e/. 5ta. y 6ta. este
                  </div>
                </div>
              </div>
              {/* Teléfonos */}
              <a
                href="tel:072985004"
                className="flex items-center gap-4 bg-[var(--primary-blue)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-blue)]/90 transition-colors"
              >
                <FaPhoneAlt className="w-6 h-6 ---text-[var(--accent-orange)]" />
                <span className="font-bold">Llamanos</span>
              </a>
              <a
                href="https://wa.me/c/593992717612"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6 text-white" />
                <span className="font-bold">Escribenos</span>
              </a>
              {/* Email */}
              <a
                href="mailto:atecelectric.ec@gmail.com"
                className="flex items-center gap-4 bg-[var(--accent-orange)] text-white px-4 py-2 rounded-lg hover:bg-[var(--accent-orange)]/90 transition-colors"
              >
                <FaEnvelope className="w-6 h-6 text-white" />
                <span className="font-bold">atecelectric.ec@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
