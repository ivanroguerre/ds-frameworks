# Ejemplo de uso del DS con Vanilla JS

## Instalación del DS

1. El DS disponibiliza cada componente como un paquete de NPM. Por ende, se debe usar
algún tipo de bundler como webpack para poderlos consumir. En este ejemplo se usa webpack
y una configuración básica del mismo. Para mayor información se puede tomar la documentación
de webpack o el bundler de elección. Adicionalmente se debe usar un gestor de paquetes, en este
ejemplo se hace uso de npm.
2. Incluir un archivo `.npmrc` (o el equivalente en el gestor de paquetes seleccionado)
en la raíz del proyecto con el siguiente contenido:

    ; `<token-de-gitlab>` es el token generado para hacer uso del registry privado
    `@dscla:registry=https://gitlab.com/api/v4/projects/35007653/packages/npm/
    //gitlab.com/api/v4/projects/35007653/packages/npm/:_authToken=<token-de-gitlab>`.

3. Instalar los paquetes del DS con el gestor de paquetes. Por ejemplo `npm i @dscla/ds-header`

## Importar paquetes del DS

Puede importarlos en el archivo js de la siguiente manera:

`import "@dscla/ds-header"`

Luego puede usar los tags del componente directamente en HTML:

`<ds-header></ds-header>`

O puede instanciarlos e insertarlos en el DOM mediante JS:

    import { Header } from "@dscla/ds-header"
    const header = new Header()
    document.getElementById("container-id").appendChild(header);

## Configuración del DS

Para que los componentes se comporten de manera adecuada es necesario importar las fuentes y
los tokens de la siguiente manera:

    // Definición de variables CSS
    import "@dscla/ds-tokens/tokens";
    // Necesario para cargar las fuentes del DS
    import "@dscla/ds-tokens/fonts";