import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// rohhj622.github.io is a user page served from the domain root, so base '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
