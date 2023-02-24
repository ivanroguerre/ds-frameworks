<template>
	<HeaderPublico />
	<Footer />
</template>

<script>
import { defineAsyncComponent } from "vue"

export default {
	name: "SnippetsPage",
	components: {
		Footer: defineAsyncComponent( () => import(/*webpackChunkName: "Footer" */ "@/modules/snippets/components/Footer")),
		HeaderPublico: defineAsyncComponent( () => import(/*webpackChunkName: "HeaderPublico" */ "@/modules/snippets/components/HeaderPublico")),
	}
}
</script>

<style>

</style>