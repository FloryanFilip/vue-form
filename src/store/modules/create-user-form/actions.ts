import { ActionContext, ActionTree } from 'vuex';

import { CreateUserFormState } from '@/store/modules/create-user-form/types/CreateUserFormState';
import { RootState } from '@/store/types/RootState';
import { Actions, Mutations } from '@/store/modules/create-user-form/types/StoreTypes';
import useValidateInputs from '@/helpers/useValidateInputs';
import { i18n } from '@/main';
import UserService from '@/core/services/userService';

const {minLengthValid, maxLengthValid, patternValid} = useValidateInputs();

const userService = new UserService();

const FULL_NAME_MIN_LENGTH = 3;
const FULL_NAME_MAX_LENGTH = 255;
const EMAIL_MAX_LENGTH = 255;
const EMAIL_REGEXP = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/, 'i');
const PHONE_NUMBER_REGEXP = new RegExp(/^\+?[1-9]\d{5,14}$/);

export const actions: ActionTree<CreateUserFormState, RootState> = {
	[Actions.SET_FULL_NAME]: ({commit, state}: ActionContext<CreateUserFormState, RootState>, payload: string) => {
		const fullName = {...state.fullName};
		if (!payload) {
			fullName.error = i18n.tc('validations.required', 1,
				{value: i18n.t('createNewPersonForm.labels.fullName').toString()}).toString();
		} else if (!minLengthValid(payload, FULL_NAME_MIN_LENGTH)) {
			fullName.error = i18n.t('validations.minLength', {count: FULL_NAME_MIN_LENGTH}).toString();
		} else if (!maxLengthValid(payload, FULL_NAME_MAX_LENGTH)) {
			fullName.error = i18n.t('validations.maxLength', {count: FULL_NAME_MAX_LENGTH}).toString();
		} else {
			fullName.error = undefined;
		}
		commit(Mutations.MUTATE_FULL_NAME, {...fullName, value: payload});
	},
	[Actions.SET_EMAIL]: ({commit, state}: ActionContext<CreateUserFormState, RootState>, payload: string) => {
		const email = {...state.email};
		if (!payload) {
			email.error = i18n.tc('validations.required', 2,
				{value: i18n.t('createNewPersonForm.labels.email').toString()}).toString();
		} else if (!maxLengthValid(payload, EMAIL_MAX_LENGTH)) {
			email.error = i18n.t('validations.maxLength', {count: EMAIL_MAX_LENGTH}).toString();
		} else if (!patternValid(payload, EMAIL_REGEXP)) {
			email.error = i18n.t('validations.invalidPattern').toString();
		} else {
			email.error = undefined;
		}
		commit(Mutations.MUTATE_EMAIL, {...email, value: payload});
	},
	[Actions.SET_PHONE_NUMBER]: ({commit, state}: ActionContext<CreateUserFormState, RootState>, payload: string) => {
		const phoneNumber = {...state.phoneNumber};
		if (!payload) {
			phoneNumber.error = i18n.tc('validations.required', 2,
				{value: i18n.t('createNewPersonForm.labels.phone').toString()}).toString();
		} else if (!patternValid(payload, PHONE_NUMBER_REGEXP)) {
			phoneNumber.error = i18n.t('validations.invalidPattern').toString();
		} else {
			phoneNumber.error = undefined;
		}
		commit(Mutations.MUTATE_PHONE_NUMBER, {...phoneNumber, value: payload});
	},
	[Actions.SUBMIT_FORM]: ({state, dispatch}: ActionContext<CreateUserFormState, RootState>) => {
		return new Promise<void>(async (resolve, reject) => {
			if (!state.fullName.value || !state.email.value || !state.phoneNumber.value) {
				await dispatch(Actions.SET_FULL_NAME, state.fullName.value);
				await dispatch(Actions.SET_EMAIL, state.email.value);
				await dispatch(Actions.SET_PHONE_NUMBER, state.phoneNumber.value);
				reject();
			} else {
				try {
					await userService.createUser(state.fullName.value, state.email.value, state.phoneNumber.value);
				} catch (err) {
					reject(err);
				} finally {
					resolve();
				}
			}
		});
	},
	[Actions.CLEAR_FORM_STATE]: ({commit}: ActionContext<CreateUserFormState, RootState>) => {
		commit(Mutations.MUTATE_FULL_NAME, {value: '', error: undefined});
		commit(Mutations.MUTATE_EMAIL, {value: '', error: undefined});
		commit(Mutations.MUTATE_PHONE_NUMBER, {value: '', error: undefined});
	},
};
