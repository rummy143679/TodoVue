import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap';
import axios from 'axios';

const app = createApp(App)
app.use(axios)
app.use(store)
app.use(router)
app.mount('#app')
