import Vue from 'vue';
import Vuex from 'vuex';

import { RootState } from '@/store/types/RootState';
import { store as createUserForm } from '@/store/modules/create-user-form/index';
import { store as loadingModule } from '@/store/modules/loading/index';

Vue.use(Vuex);

export const store = new Vuex.Store<RootState>({
	strict: process.env.NODE_ENV === 'production',
	modules: {
		createUserForm,
		loading: loadingModule,
	},
});
