<template>
	<ds-select type="select" option="simple" variant="primario" label="título del select" placeholder="Seleccione una opción">
		<ds-select-option value="1" icon="icon-casa">Opción 1</ds-select-option>
		<ds-select-option value="2" icon="icon-casa">Opción 2</ds-select-option>
		<ds-select-option value="3" icon="icon-casa">Opción 3</ds-select-option>
		<ds-select-option value="4" icon="icon-casa">Opción 4</ds-select-option>
	</ds-select>
</template>

<script>
import "@dscla/ds-select"
export default {
	name : "SelectComponent"
}
</script>