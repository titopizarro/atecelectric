/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Habilita la exportación estática
  trailingSlash: true, // Mejor para GitHub Pages
  basePath: "/atecelectric", // Ajusta si tu repo cambia de nombre
  images: {
    unoptimized: true, // Hace que next/image funcione en export
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/atecelectric",
  },
};

export default nextConfig;
