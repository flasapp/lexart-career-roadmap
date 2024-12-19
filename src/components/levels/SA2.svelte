<script>
	import { fly, fade } from 'svelte/transition';
	import AstroImage from '../AstroImage.svelte';
	import Title from '../Title.svelte';

	let level = { 
		name: 'Software Architect L2', 
		description: 'Intermediate Architect', 
		years: 3,
		image : './SA2.png'
	};

</script>
<div>
	<Title title={level.name} />
	<small in:fade={{ duration: 600 }} out:fade={{ duration: 400 }}>
		{level.description}
	</small>
	<div in:fade={{ duration: 600 }} out:fade={{ duration: 400 }} style="margin-top:12px; line-height: 24px">
		<span> Mínimum duration for next role: 1 year</span>
		<h4 style="margin-bottom:-4px"> Capabilities/Skills: </h4>
		<ul>
			<li>Experience with distributed architectures and microservices.</li>
			<li>Optimization at the architectural level.</li>
			<li>Management of technical priorities (tradeoff).</li>
		</ul>
		<!-- <h4 style="margin-bottom:12px"> This role requires a test! 🥸 </h4> -->
	</div>
	<AstroImage src={level.image} alt="{level.name}" />
</div>
