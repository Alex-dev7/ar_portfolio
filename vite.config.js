import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  }
})

// export default defineConfig({
//   css: {
//     preprocessorOptions: {
//       scss: {
//         api: 'modern-compiler' // or "modern"
//       }
//     }
//   }
// })