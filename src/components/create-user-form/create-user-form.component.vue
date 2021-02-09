<template>
	<div class="container">
		<form class="form" @submit.prevent="$emit('submitForm')">
			<div class="row">
				<div class="title">
					{{ $t('createNewPersonForm.title') }}
				</div>
			</div>
			<div class="row">
				<app-input
						type="text"
						:class="{ 'error': fullName.error }"
						:placeholder="$t('createNewPersonForm.placeholders.fullName')"
						:value="fullName.value"
						:error="fullName.error"
						@input="$emit('setFullName', $event.target.value)"
						data-testid="fullName"
						v-focus>
					{{ $t('createNewPersonForm.labels.fullName') }}
				</app-input>
			</div>
			<div class="row">
				<app-input
						type="text"
						:class="{ 'error': email.error }"
						:placeholder="$t('createNewPersonForm.placeholders.email')"
						:value="email.value"
						:error="email.error"
						@input="$emit('setEmail', $event.target.value)"
						data-testid="email">
					{{ $t('createNewPersonForm.labels.email') }}
				</app-input>
			</div>
			<div class="row">
				<app-input
						type="text"
						:class="{ 'error': phoneNumber.error }"
						:placeholder="$t('createNewPersonForm.placeholders.phone')"
						:value="phoneNumber.value"
						:error="phoneNumber.error"
						@input="$emit('setPhoneNumber', $event.target.value)"
						data-testid="phoneNumber">
					{{ $t('createNewPersonForm.labels.phone') }}
				</app-input>
			</div>
			<div class="row">
				<app-button
						class="button-primary button--full-width"
						type="submit"
						:disabled="allFieldsValid"
						data-testid="button-submit">
					<i v-if="loading" class="fa fa-circle-o-notch fa-spin"></i>
					<span v-else>{{ $t('buttons.confirm') }}</span>
				</app-button>
				<app-button
						class="button-secondary button--full-width"
						type="button"
						@click="$emit('cancel')"
						data-testid="button-cancel"
				>{{ $t('buttons.cancel') }}
				</app-button>
			</div>
		</form>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import { InputObject } from '@/types/entities';
	import { PropType } from 'vue';

	@Component({
		directives: {
			focus: {
				inserted(el: HTMLElement) {
					el.querySelector('input')?.focus();
				},
			},
		},
	})
	export default class CreateUserFormComponent extends Vue {
		@Prop({
			type: Object as PropType<InputObject>,
			required: true,
			validator: (val) => ('value') in val,
		}) fullName!: InputObject;
		@Prop({
			type: Object as PropType<InputObject>,
			required: true,
			validator: (val) => ('value') in val,
		}) email!: InputObject;
		@Prop({
			type: Object as PropType<InputObject>,
			required: true,
			validator: (val) => ('value') in val,
		}) phoneNumber!: InputObject;
		@Prop({type: Boolean, default: false}) loading!: boolean;

		get allFieldsValid(): string | undefined {
			return this.fullName?.error || this.email?.error || this.phoneNumber?.error;
		}

	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_variables.scss';

	.container {
		display: flex;
	}

	.form {
		display: flex;
		flex-direction: column;
		padding: 50px 25px;
		-webkit-box-shadow: 6px -1px 43px 10px rgba(0, 0, 0, 0.58);
		-moz-box-shadow: 6px -1px 43px 10px rgba(0, 0, 0, 0.58);
		box-shadow: 6px -1px 43px 10px rgba(0, 0, 0, 0.58);
		border-radius: 25px;

		.row {
			margin-top: 10px;

			button:last-of-type {
				margin-top: 5px;
			}

			&:first-of-type {
				margin-top: 0;
			}

			&:last-of-type {
				margin: auto 0;
			}
		}

		.title {
			font-size: 52px;
			font-weight: bold;
		}
	}
</style>
