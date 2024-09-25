import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import '@mdi/font/css/materialdesignicons.min.css';

app.use(createPinia())
app.use(router)

app.mount('#app')
