// import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";

export function getImagePath(src) {
  // Si la ruta ya incluye el basePath, no lo agregues de nuevo
  if (typeof window !== "undefined") {
    const basePath = window.__NEXT_DATA__?.assetPrefix || "";
    if (src.startsWith(basePath)) return src;
    return `${basePath}${src}`;
  }
  // Fallback para SSR (no debería usarse en export, pero por si acaso)
  return src;
}
