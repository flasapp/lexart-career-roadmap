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
		filter: brightness(1.8) contrast(1);
	}
	/* Animation like the austronaut is loating going up and down */
	
	@keyframes float {
	0% {
		transform: translate(0, 0) rotate(0deg);
		filter: brightness(1.2);
	}
	25% {
		transform: translate(30px, -30px) rotate(10deg);
		filter: brightness(1.2.6);
	}
	50% {
		transform: translate(60px, 0) rotate(0deg);
		filter: brightness(1.8);
	}
	75% {
		transform: translate(30px, 30px) rotate(-10deg);
		filter: brightness(1.6);
	}
	100% {
		transform: translate(0, 0) rotate(0deg);
		filter: brightness(1.2);
	}
}



</style>