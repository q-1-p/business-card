import { defineConfig } from "vite";
import env from "vite-plugin-env-compatible";
import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		env({ prefix: "VITE", mountedPath: "process.env" }),
		react(),
		UnoCSS(),
	],
});
