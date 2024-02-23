// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env file (optional)
dotenv.config();

// const env = loadEnv;
export default defineConfig({
  
  plugins: [react()],
  // define: {
  //   __APP_ENV__: JSON.stringify(env.APP_ENV),
  // }
});
