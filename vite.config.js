import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // Import the plugin

export default defineConfig({
  plugins: [react(), svgr()] // Add it to Vite's plugins array
});
