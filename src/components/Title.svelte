<script>
	import { fade } from 'svelte/transition';
	export let title = ''
</script>

<h2 in:fade={{ duration: 600 }} out:fade={{ duration: 400 }} style="margin-bottom:-2px">
	{title}
</h2>

<style>
	h2{
		text-shadow: 0px 0px 10px rgba(255, 255, 255, .4) !important;
		letter-spacing: 1.5px;
		margin-top: 0px;
	}
</style>