<script setup lang="ts">
interface Props {
	text?: string;
	iconLeft?: string;
	iconRight?: string;
}

defineProps<Props>();
</script>

<template>
	<button class="btn">
		<Icon v-if="iconLeft" :name="`icons:${iconLeft}`" class="btn__icon" />
		<span v-if="text" class="btn__text" v-html="text" />
		<Icon v-if="iconRight" :name="`icons:${iconRight}`" class="btn__icon" />
	</button>
</template>

<style scoped lang="sass">
@import 'index'
</style>
