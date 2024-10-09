import './assets/styles/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import App from './App.vue';
import router from './router';

import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import DatePicker from 'primevue/datepicker';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import Menu from 'primevue/menu';
import Popover from 'primevue/popover';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    // preset: Aura,
  },
});

app
  .component('Button', Button)
  .component('Checkbox', Checkbox)
  .component('DatePicker', DatePicker)
  .component('InputText', InputText)
  .component('Password', Password)
  .component('Textarea', Textarea)
  .component('Select', Select)
  .component('Menu', Menu)
  .component('Popover', Popover);

app.use(createPinia());
app.use(router);

app.mount('#app');
