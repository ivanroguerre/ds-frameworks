<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-6 col-lg-4">
				<router-link to="/">Inicio</router-link>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-4">
				<router-link to="/atomos">Átomos</router-link>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-4">
				<router-link to="/moleculas">Moléculas</router-link>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-4">
				<router-link to="/organismos">Organismos</router-link>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-4">
				<router-link to="/snippets">Snippets</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavBar"
}
</script>

<style scoped>
	div.container{
		margin-top: 60px;
	}

	div.row{
		width: 100%;
    display: flex;
    flex-flow: row wrap;
		row-gap: 10px;
    justify-content: flex-start;
	}

	div a{
    color: white;
    background: #64bb87;
    display: block;
    border-radius: 10px;
    text-align: center;
    padding: 10px 20px;
		text-decoration: none;
		text-transform: uppercase;
	}

	div a:hover{
		background-color: #2f8b54;
		transition: 0.3s ease-in-out;
		cursor: pointer;
	}

	a.router-link-exact-active{
		color: #00220d;
		font-weight: bold;
	}

</style>