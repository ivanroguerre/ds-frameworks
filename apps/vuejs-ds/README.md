# arquetipo-cla-vuejs

## Documentación Oficial VueJS
- `https://vuejs.org`

## Configuración del registry Token para usar el DS
```
echo //gitlab.com/api/v4/projects/35007653/packages/npm/:_authToken=$TOKEN > .npmrc
```

```
npm config set @dscla:registry https://gitlab.com/api/v4/projects/35007653/packages/npm/
```

```
npm config set -- '//gitlab.com/api/v4/projects/35007653/packages/npm/:_authToken' "$TOKEN"
```

## Archivo de configuración

<img width="855" alt="image" src="https://user-images.githubusercontent.com/39087254/220917642-16ae1e32-3dca-4573-86cd-2f00a219f8ef.png">

## Importar archivos CSS del DS en el archivo principal
```
import { createApp } from "vue"

import "@dscla/ds-tokens/tokens"
import "@dscla/ds-tokens/fonts"
import "@dscla/ds-tokens/utils"
import "@dscla/ds-tokens/grid"

import App from "./App.vue"

createApp(App)
	.mount("#app")
```

## Instalación de un componente del DS

```
npm install @dscla/ds-example
```

## Estructura básica de un componente
```
<template>
	<ds-example :title=title>
		<!-- Content -->
	</ds-example>
</template>

<script>
import "@dscla/ds-example"

export default {
	name: "exampleComponent"
}
</script>
```

## LLamar al componente normal
```javascript
<template>
	<ExampleComponent />
</template>

<script>
import ExampleComponent from "@/components/ExampleComponent"

export default {
	name: "App",
	components: {
		ExampleComponent
	}
}
</script>
```

## LLamar al componente con lazy load
#### El Nombre con comentario es para el Vue.js devtools extensión del Google Chrome
```javascript
<template>
	<ExampleComponent />
</template>

<script>
import { defineAsyncComponent } from "vue"

export default {
	name: "App",
	components: {
		ExampleComponent: defineAsyncComponent( () => import(/*webpackChunkName: "ExampleComponent" */ "@/components/ExampleComponent")),
	}
}
</script>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
