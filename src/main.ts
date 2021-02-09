import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import './core/http';

import VueI18n from 'vue-i18n';
import pl from '@/i18n/pl';
import en from '@/i18n/en';

Vue.config.productionTip = false;

/* i18n */
Vue.use(VueI18n);
export const i18n = new VueI18n({
	locale: 'pl',
	fallbackLocale: 'en',
	messages: {
		pl,
		en,
	},
	silentTranslationWarn: process.env.NODE_ENV === 'production',
});

import '@/styles/main.scss';

const req = require.context('./core/components/', true, /component\.(ts|js|vue)$/i);

/* Attach all core components as global components */
req.keys().map((key) => {
	const component = key.match(/[ \w-]+?(?=\.component\.(ts|js|vue))/);
	if (component) { return Vue.component(component[0], req(key).default); }
});

/* Import mock service worker for browser requests */
import { worker } from '@/mocks/browser';

if (process.env.NODE_ENV === 'development') {
	worker.start();
}

new Vue({
	i18n,
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
