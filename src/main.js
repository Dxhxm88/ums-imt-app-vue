import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import the router
import 'bootstrap/dist/css/bootstrap.min.css';  // Optional: Import Bootstrap CSS

createApp(App)
  .use(router)  // Use the router in the Vue app
  .mount('#app');
