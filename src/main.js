import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap JS (optional, if you want Bootstrap's JS components)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/style.css'




createApp(App).use(store).use(router).mount('#app')

