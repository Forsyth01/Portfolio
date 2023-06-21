import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss('./tailwind.config.js'),],
  
})

// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from 'tailwindcss';

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });

// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import tailwindcss from 'tailwindcss';

// export default defineConfig({
//   plugins: [
//     reactRefresh(),
//     tailwindcss('./tailwind.config.js'),
//   ],
// });

