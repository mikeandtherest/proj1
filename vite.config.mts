import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [angular(), tsconfigPaths()],
  resolve: {
    extensions: ['.ts', '.js']
  },
  build: {
    target: 'es2022',
  },
  optimizeDeps: {
    include: ['@angular/common', '@angular/core'],
  },
});