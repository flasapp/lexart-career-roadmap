<script>
	export let src = ''
	export let alt = ''
</script>

<img {src} {alt} class="astro-image">

<style>
	.astro-image {
		width: 70px;
		height: auto;
		position: absolute;
		top: 80px;
		right: 120px;
		animation: float 12s linear infinite; /* Más lento y uniforme */
	}
	/* Animation like the austronaut is loating going up and down */
	
	@keyframes float {
	0% {
		transform: translate(0, 0) rotate(0deg);
	}
	25% {
		transform: translate(30px, -30px) rotate(10deg); /* Arriba a la derecha y un poco de rotación */
	}
	50% {
		transform: translate(60px, 0) rotate(0deg); /* Abajo a la derecha, vuelve al centro */
	}
	75% {
		transform: translate(30px, 30px) rotate(-10deg); /* Abajo a la izquierda y rota al otro lado */
	}
	100% {
		transform: translate(0, 0) rotate(0deg); /* Arriba a la izquierda, vuelve al inicio */
	}
}



</style>