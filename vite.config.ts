import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Actions sets BASE_PATH (e.g. /repo-name/) for project pages; omit for root hosting.
const base = process.env.BASE_PATH ?? "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
});
