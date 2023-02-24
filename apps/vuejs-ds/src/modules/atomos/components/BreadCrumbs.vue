<template>
	<ds-breadcrumbs> 
		<ds-breadcrumb href="/" label="Volver a">Nivel superior</ds-breadcrumb> 
		<ds-breadcrumb href="/" label="Volver a">Nivel anterior</ds-breadcrumb> 
		<ds-breadcrumb>Nivel actual</ds-breadcrumb> 
	</ds-breadcrumbs>
</template>

<script>
import "@dscla/ds-breadcrumbs"
export default {
	name: "BreadCrumbsComponent"
}
</script>

<style>

</style>