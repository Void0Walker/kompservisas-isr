import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: /^@\//, replacement: `${path.resolve(__dirname, ".")}/` }],
  },
  test: {
    environment: "node",
    exclude: ["**/node_modules/**", "**/e2e/**", "**/.next/**"],
    include: ["**/*.{test,spec}.ts"],
  },
});
