# Registry Publish design system. Angular

Para la instalación de paquetes del sistema de diseño primero debemos confirmar si este fue publicado en la sección registry de gitlab. Por el momento están siendo publicadas en el siguiente proyecto:

[Proyecto en registry](https://gitlab.com/ccla/apoyo/canales-virtuales/sistemas-componentes-frontend/njs-rct-sistemacomponentes-frontend/-/packages).

Para realizar la descarga de esa publicación debemos modificar el destino del cual queremos descargar el paquete, en modo administrador debemos ejecutar los siguientes comandos dentro del proyecto (o repositorio) que queremos que tenga los componentes DS.

**echo //gitlab.com/api/v4/projects/35007653/packages/npm/:_authToken=$TOKEN > .npmrc**
**npm config set @dscla:registry https://gitlab.com/api/v4/projects/35007653/packages/npm/**
**npm config set -- '//gitlab.com/api/v4/projects/35007653/packages/npm/:_authToken' "$TOKEN"**

Donde la URL `gitlab.com/api/v4/projects/35007653/packages/npm/` hace referencia al proyecto mencionado en el inicio de este documento (donde están publicado los paquetes)

El `$TOKEN` será proporcionado por el área que corresponda para su utilización.

Una vez ejecutado esos comandos se procede a la instalación `npm i <package>`, como en el siguiente ejemplo, que se desea instalar `ds-button`

Como la dependencia se agrega de forma automática al fichero `package.json` antes de ejecutar `npm i` al proyecto se deben ejecutar los comandos de configuración npm (npm set config) antes de eso.


# Instalado ya el componente

Una vez instalado los paquetes necesarios hay que agregar el el `SCHEMA` en el `NgModules` de la siguiente forma

1 ir al `NgModule` e importar `CUSTOM_ELEMENTS_SCHEMA`.
    **import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';**

2 En el mismo `NgModule` agregar el SCHEMA para que permita leer schemas personalizados.
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

    
Ya  tenemos a disposición el DS siempre y cuando importemos en nuestro `TypeScript` el componente a utilizar.
    **import "@dscla/ds-card";**