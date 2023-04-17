import {
    createApp
} from 'vue'
import './style.css'
import App from './App.vue'
// Vuetify
import 'vuetify/styles'
import {
    createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/iconsets/mdi-svg'
import { mdi } from 'vuetify/iconsets/mdi'
const vuetify = createVuetify({
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
          fa,
          mdi,
        }
      },
    components,
    directives,
})
createApp(App).use(vuetify).mount('#app')