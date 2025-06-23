export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const DEPLOY_TO = process.env.DEPLOY_TO || "local";
export const ENVIROMENT =
  process.env.NEXT_PUBLIC_ENVIROMENT !== "dev"
    ? process.env.NEXT_PUBLIC_ENVIROMENT
    : null;
