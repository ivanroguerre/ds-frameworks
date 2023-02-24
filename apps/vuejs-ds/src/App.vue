<template>
	<HeaderPublico />
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-12">
				<BannerPortada />
			</div>
		</div>
		<div class="row mb-8 mt-8">
			<CardSelect />
		</div>

		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-4">
				<Select label="filtrar por rango de fecha" />	
			</div>
			<div class="col-sm-12 col-md-12 col-lg-4">
				<Select label="filtrar por estado"/>	
			</div>
			<div class="col-sm-12 col-md-12 col-lg-4">
				<Select label="filtrar por monto"/>	
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-12 mt-8 mb-8">
				<DataTable />
			</div>
		</div>		
		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-12">
				<div class="d-flex justify-content-center align-items-center">
					<Pagination :pages="20" />
				</div>
			</div>
		</div>
	</div>
	
	<Footer variant="empresas" />
</template>

<script>
import { defineAsyncComponent } from "vue"

export default {
	name: "App",
	components: {
		HeaderPublico: defineAsyncComponent( () => import(/*webpackChunkName: "HeaderPublico" */ "@/modules/snippets/components/HeaderPublico")),
		BannerPortada: defineAsyncComponent( () => import(/*webpackChunkName: "BannerPortada" */ "@/modules/organismos/components/BannerPortada")),
		CardSelect: defineAsyncComponent( () => import(/*webpackChunkName: "CardSelect" */ "@/modules/moleculas/components/CardSelect")),
		Select: defineAsyncComponent( () => import(/*webpackChunkName: "Select" */ "@/modules/atomos/components/Select")),
		DataTable: defineAsyncComponent( () => import(/*webpackChunkName: "Select" */ "@/modules/moleculas/components/DataTable")),
		Pagination: defineAsyncComponent( () => import(/*webpackChunkName: "Pagination" */ "@/modules/atomos/components/Pagination")),
		BreadCrumbs: defineAsyncComponent( () => import(/*webpackChunkName: "BreadCrumbs" */ "@/modules/atomos/components/BreadCrumbs")),
		Footer: defineAsyncComponent( () => import(/*webpackChunkName: "Footer" */ "@/modules/snippets/components/Footer")),
	}
}
</script>
