import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // React app runs on port 3000
    proxy: {
      "/api": {
        target: "http://localhost:8000", // Proxy API requests to the Express server
        changeOrigin: true, // Ensures proper forwarding of requests
        rewrite: (path) => path.replace(/^\/api/, ""), // Strip '/api' when forwarding
      },
    },
  },
});
