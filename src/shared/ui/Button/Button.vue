<script setup lang="ts">
interface Props {
	text?: string;
}

defineProps<Props>();
</script>

<template>
	<button class="btn">
		<span class="btn__text" v-html="text" />
	</button>
</template>

<style scoped lang="sass">
@import 'index'
</style>
