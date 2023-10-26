import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { loadEnv } from "vite";
import dotenv from "dotenv";

dotenv.config(); // load env vars from .env

export default ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      open: true,
    },
    build: {
      outDir: "build",
    },
    plugins: [react()],
    define: {
      "import.meta.env.VITE_VERCEL_ANALYTICS_ID": JSON.stringify(
        env.VERCEL_ANALYTICS_ID
      ),
    },
  };
};
