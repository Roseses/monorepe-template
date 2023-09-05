import { createApp } from 'vue';
import App from './app.vue';
import { add } from 'roses-utils';

console.log(add, '---------------');
const app = createApp(App);
app.mount('#app');
