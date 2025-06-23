// import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";

export function getImagePath(src) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (src.startsWith(basePath)) return src;
  return `${basePath}${src}`;
}
