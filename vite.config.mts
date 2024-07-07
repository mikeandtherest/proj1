import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  resolve: {
    extensions: ['.ts', '.js']
  },
  build: {
    target: 'es2020',
  },
  optimizeDeps: {
    include: ['@angular/common', '@angular/core'],
  },
});