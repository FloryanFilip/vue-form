<template>
	<create-user-form
			:fullName="fullName"
			:email="email"
			:phoneNumber="phoneNumber"
			:loading="loading"
			@setFullName="setFullName"
			@setEmail="setEmail"
			@setPhoneNumber="setPhoneNumber"
			@submitForm="onFormSubmit"
			@cancel="onCancel"
	></create-user-form>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { namespace } from 'vuex-class';

	import { Getters, Actions } from '@/store/modules/create-user-form/types/StoreTypes';
	import { Getters as LoadingGetters } from '@/store/modules/loading/types/StoreTypes';
	import { InputObject } from '@/types/entities';

	const formModule = namespace('createUserForm');
	const loading = namespace('loading');

	@Component({
		components: {
			'create-user-form': () => import(/* webpackChunkName: "createUserForm" */ '@/components/create-user-form/create-user-form.component.vue'),
		},
	})
	export default class FormComponent extends Vue {
		@formModule.Action(Actions.SET_FULL_NAME) setFullName!: (payload: string) => Promise<void>;
		@formModule.Action(Actions.SET_EMAIL) setEmail!: (payload: string) => Promise<void>;
		@formModule.Action(Actions.SET_PHONE_NUMBER) setPhoneNumber!: (payload: string) => Promise<void>;
		@formModule.Action(Actions.SUBMIT_FORM) submitForm!: () => Promise<void>;
		@formModule.Action(Actions.CLEAR_FORM_STATE) clearFormState!: () => Promise<void>;

		@formModule.Getter(Getters.GET_FULL_NAME) fullName!: InputObject;
		@formModule.Getter(Getters.GET_EMAIL) email!: InputObject;
		@formModule.Getter(Getters.GET_PHONE_NUMBER) phoneNumber!: InputObject;
		@loading.Getter(LoadingGetters.GET_LOADING) loading!: boolean;

		onCancel(): void {
			this.$router.back();
		}

		onFormSubmit(): void {
			this.submitForm().then(() => this.$router.push({ name: 'Success' }));
		}

		destroyed(): void {
			this.clearFormState();
		}
	}
</script>

<style lang="scss" scoped>
</style>
