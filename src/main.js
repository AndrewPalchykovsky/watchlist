import { createApp } from 'vue';
import App from './App';
import BaseCard from '@/components/UI/BaseCard';
import BaseButton from '@/components/UI/BaseButton';
import BaseLink from '@/components/UI/BaseLink';
import BaseDialog from '@/components/UI/BaseDialog';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-link', BaseLink);
app.component('base-dialog', BaseDialog);

app.mount('#app');
