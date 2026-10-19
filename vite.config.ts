import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/ts-app/", // ← Esto ya lo tienes (o deberías tenerlo)
  build: {
    outDir: "dist", // ← Esto cambia el nombre de dist a ts-app
  },
});
