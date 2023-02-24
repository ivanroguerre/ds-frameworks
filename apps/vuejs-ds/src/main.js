import { createApp } from "vue"

// Definición de variables CSS
import "@dscla/ds-tokens/tokens"
// Necesario para cargar las fuentes del DS
import "@dscla/ds-tokens/fonts"
// Clases auxiliares (textos, etc.)
import "@dscla/ds-tokens/utils"
// Sistema de grilla del DS
import "@dscla/ds-tokens/grid"

import App from "./App.vue"
import router from "./router/router"

createApp(App)
	.use(router)
	.mount("#app")
