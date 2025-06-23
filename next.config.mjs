/** @type {import('next').NextConfig} */
import { BASE_PATH, DEPLOY_TO } from "./src/app/constants/index.js";

let nextConfig = {};

if (DEPLOY_TO === "github") {
  // Configuración para GitHub Pages
  nextConfig = {
    output: "export", // Habilita la exportación estática
    trailingSlash: true, // Mejor para GitHub Pages
    basePath: `/${BASE_PATH}`, // Ajusta si tu repo cambia de nombre
    images: {
      unoptimized: true, // Hace que next/image funcione en export
    },
    env: {
      NEXT_PUBLIC_BASE_PATH: `/${BASE_PATH}`,
    },
  };
} else {
  // Configuración para desarrollo local
  nextConfig = {
    // Configuración mínima para desarrollo
  };
}

export default nextConfig;
