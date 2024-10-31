import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Change the frontend port to 5173 or another available port
    proxy: {
      "/api/": "http://localhost:3000",
      "/uploads/": "http://localhost:3000",
    },
  },
});
