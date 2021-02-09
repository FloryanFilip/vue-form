<template>
	<div class="container">
		<label data-testid="label" @click.stop>
			<slot></slot>
			<input v-bind="$attrs" v-on="$listeners">
		</label>
		<div class="errors-container" v-show="error">
			{{ error }}
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class AppInputComponent extends Vue {
		@Prop({type: String, default: ''}) error!: string;
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_variables.scss';

	.container {
		display: flex;
		padding-bottom: 25px;
		position: relative;

		label {
			display: flex;
			flex-direction: column;
			flex: 1 1 auto;

			input {
				margin-top: 10px;
				padding: 5px;
				font-family: inherit;
				font-size: 100%;
			}
		}

		.errors-container {
			position: absolute;
			bottom: 10px;
			font-size: 10px;
			color: red;
		}

		&.error {
			input {
				-webkit-box-shadow: 0 0 10px $primary-red;
				-moz-box-shadow: 0 0 10px $primary-red;
				box-shadow: 0 0 10px $primary-red;

				&:focus {
					outline: 2px solid $primary-red;
				}
			}
		}
	}
</style>
