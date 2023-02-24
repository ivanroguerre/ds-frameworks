<template>
	<div class="container">
    <div class="row"> 
      <div class="col-lg-12 col-mg-12 col-sm-12"> 
        <ds-banner-portada label="Leo nec nec, congue morbi aenean ac nec amet" description="Eget purus amet proin enim libero convallis integer amet blandit libero, placerat sed sem auctor pulvinar aliquam libero, hulla vitae amet vehicula lacus, convallis at tincidunt pellentesque nulla fringilla tortor" src-image="https://www.w3schools.com/howto/img_mountains_wide.jpg" alt-image="banner" tag="Frase de 1 sola línea" href="/" thumbnail="https://www.w3schools.com/howto/img_mountains_wide.jpg" alt-thumbnail="thumbnail" variant="trabajadores" type="thumbnail">
          <div slot="description">Eget purus amet proin enim libero convallis integer amet blandit libero, placerat sed sem auctor pulvinar aliquam libero, hulla vitae amet vehicula lacus, convallis at tincidunt pellentesque nulla fringilla tortor</div>
          <ds-breadcrumbs slot="breadcrumb">
            <ds-breadcrumb href="/">Nivel Superior</ds-breadcrumb>
            <ds-breadcrumb href="/" label="Volver al"> Nivel Anterior </ds-breadcrumb>
            <ds-breadcrumb>Nivel Actual</ds-breadcrumb>
          </ds-breadcrumbs>
          <div slot="buttons">
            <ds-button behaviour="fijo">Botón de prueba</ds-button>
            <ds-button variant="secundario" behaviour="fijo">Botón de prueba</ds-button>
          </div>
        </ds-banner-portada>
      </div>
    </div>
  </div>
</template>

<script>
import "@dscla/ds-banner-portada"
export default {
	name: "BannerPortadaComponent"
}
</script>