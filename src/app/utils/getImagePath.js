import { BASE_PATH } from "../constants";

export function getImagePath(src) {
  if (src.startsWith(BASE_PATH)) return src;

  return `${BASE_PATH}${src}`;
}
