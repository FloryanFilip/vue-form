import { Module } from 'vuex';

import { CreateUserFormState } from '@/store/modules/create-user-form/types/CreateUserFormState';
import { RootState } from '@/store/types/RootState';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const store: Module<CreateUserFormState, RootState> = {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
