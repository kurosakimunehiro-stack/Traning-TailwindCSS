import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/twcsstraning/", // Set this to your deployment subdirectory
});
