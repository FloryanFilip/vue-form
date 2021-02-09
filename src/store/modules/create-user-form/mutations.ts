import { MutationTree } from 'vuex';

import { CreateUserFormState } from '@/store/modules/create-user-form/types/CreateUserFormState';
import { Mutations } from '@/store/modules/create-user-form/types/StoreTypes';
import { InputObject } from '@/types/entities';

export const mutations: MutationTree<CreateUserFormState> = {
	[Mutations.MUTATE_FULL_NAME]: (state: CreateUserFormState, payload: InputObject) => state.fullName = payload,
	[Mutations.MUTATE_EMAIL]: (state: CreateUserFormState, payload: InputObject) => state.email = payload,
	[Mutations.MUTATE_PHONE_NUMBER]: (state: CreateUserFormState, payload: InputObject) => state.phoneNumber = payload,
};
