import { ActionContext, ActionTree, GetterTree, Module, MutationTree } from 'vuex';

import { LoadingState } from '@/store/modules/loading/types/LoadingState';
import { RootState } from '@/store/types/RootState';
import { Actions, Getters, Mutations } from '@/store/modules/loading/types/StoreTypes';

const getters: GetterTree<LoadingState, RootState> = {
	[Getters.GET_LOADING]: (state: LoadingState) => state.loading,
};

const actions: ActionTree<LoadingState, RootState> = {
	[Actions.SET_LOADING]: ({commit}: ActionContext<LoadingState, RootState>, payload: boolean) => {
		commit(Mutations.MUTATE_LOADING, payload);
	},
};

const mutations: MutationTree<LoadingState> = {
	[Mutations.MUTATE_LOADING]: (state: LoadingState, payload: boolean) => state.loading = payload,
};

export const loadingState: LoadingState = {
	loading: false,
};

export const store: Module<LoadingState, RootState> = {
	namespaced: true,
	state: loadingState,
	mutations,
	actions,
	getters,
};
