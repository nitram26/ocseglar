import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify' // Asegúrate de importar el plugin

export default defineConfig({
  plugins: [
    vue(),

    vuetify({ autoImport: true }) // Configuración del plugin de Vuetify
  ]
})
