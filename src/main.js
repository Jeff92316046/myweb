import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

// Translations provided by Vuetify
import { pl, zhHans } from 'vuetify/locale'

import App from './App.vue'

const app = createApp(App)

const vuetify = createVuetify({
  locale: {
    locale: 'zhHans',
    messages: { zhHans, pl},
  },
})

app.use(vuetify)

app.mount('#app')