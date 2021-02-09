<template>
	<div class="container">
		<img src="@/assets/success.svg" :alt="$t('common.success')"/>
	</div>
</template>

<script lang="ts">

	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class SuccessComponent extends Vue {

	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/_variables.scss';

	.container {
		display: flex;
		justify-content: center;
		flex-direction: column;

		img {
			transform: scale(0.25);
		}
	}
</style>
