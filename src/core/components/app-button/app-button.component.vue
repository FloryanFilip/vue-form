<template>
	<button v-bind="$attrs" v-on="$listeners">
		<slot>{{ $t('buttons.defaultLabel') }}</slot>
	</button>
</template>

<script lang="ts">

	import { Vue } from 'vue-property-decorator';

	export default class AppButtonComponent extends Vue {}
</script>
