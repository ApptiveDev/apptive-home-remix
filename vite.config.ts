/// <reference types="vitest/config" />

import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, type UserConfigExport } from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [!process.env.VITEST && reactRouter(), tsconfigPaths()],
  test: {
    include: ["./app/**/*.test.(ts|tsx)"],
    environment: 'jsdom',
  },
} as UserConfigExport);
