<template>
	<div class="home">
		<router-link to="form">
			<app-button class="button-primary" data-cy="navigateToFormButton">
				<template #default>
					{{ $t('common.navigateToForm') }}
				</template>
			</app-button>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Home',
	};
</script>

<style lang="scss" scoped>
	.home {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
