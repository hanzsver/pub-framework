import { createApp } from 'vue';

// styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/styles/tailwind.css';
import '@/assets/styles/main.scss';

// mouting point for the whole app
import App from '@/App.vue';

// routes
import router from './router';

createApp(App).use(router).mount('#app');
