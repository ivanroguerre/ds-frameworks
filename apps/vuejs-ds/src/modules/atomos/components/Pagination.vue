<template>
	<ds-pagination :pages=pages></ds-pagination>
</template>

<script>
import "@dscla/ds-pagination"
export default {
	name : "PaginationComponent",
	data() {
		return {
			pages: this.pages
		}
	},
	props: {
		pages: {
			type: [String, Number],
			default: 100,
			required: true
		},
	},
	validator( value ) {
		return value >= 0
	}
}
</script>