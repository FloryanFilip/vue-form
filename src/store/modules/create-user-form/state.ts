import { CreateUserFormState } from '@/store/modules/create-user-form/types/CreateUserFormState';

export const state: CreateUserFormState = {
	fullName: {
		value: '',
		error: undefined,
	},
	email: {
		value: '',
		error: undefined,
	},
	phoneNumber: {
		value: '',
		error: undefined,
	},
};
