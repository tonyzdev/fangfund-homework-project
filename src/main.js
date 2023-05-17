import { createApp } from 'vue';
import App from './App.vue';
import VueParticles from 'vue-particles';

// Create the Vue app instance
const app = createApp(App);

// Use the VueParticles plugin
app.use(VueParticles);

// Mount the app instance to the DOM
app.mount('#app');




