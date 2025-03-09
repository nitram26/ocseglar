import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 🔹 Importa Vuetify y sus estilos
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

// 🔹 Crea la instancia de Vuetify
const vuetify = createVuetify()

// 🔹 Crea la app y usa Vuetify
const app = createApp(App)
app.use(vuetify);
app.use(router);
app.mount('#app')
