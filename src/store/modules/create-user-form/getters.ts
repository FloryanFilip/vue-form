import { GetterTree } from 'vuex';

import { RootState } from '@/store/types/RootState';
import { CreateUserFormState } from '@/store/modules/create-user-form/types/CreateUserFormState';
import { Getters } from '@/store/modules/create-user-form/types/StoreTypes';

export const getters: GetterTree<CreateUserFormState, RootState> = {
	[Getters.GET_FULL_NAME]: (state: CreateUserFormState) => state.fullName,
	[Getters.GET_EMAIL]: (state: CreateUserFormState) => state.email,
	[Getters.GET_PHONE_NUMBER]: (state: CreateUserFormState) => state.phoneNumber,
};
