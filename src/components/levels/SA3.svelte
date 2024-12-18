<script>
	import { fly, fade } from 'svelte/transition';
	import AstroImage from '../AstroImage.svelte';

	let level = { 
		name: 'Software Architect L3', 
		description: 'Advanced Architect', 
		years: 3,
		image : './FS2.png'
	};

</script>
<div>
	<h2 in:fade={{ duration: 600 }} out:fade={{ duration: 400 }} style="margin-bottom:-2px">
		{level.name}
	</h2>
	<small in:fade={{ duration: 600 }} out:fade={{ duration: 400 }}>
		{level.description}
	</small>
	<div in:fade={{ duration: 600 }} out:fade={{ duration: 400 }} style="margin-top:12px; line-height: 24px">
		<span> Mínimum duration for next role: 2 years</span>
		<h4 style="margin-bottom:-4px"> Capabilities/Skills: </h4>
		<ul>
			<li>Design of large-scale systems.</li>
			<li>Technical strategic decisions.</li>
			<li>Extensive experience in multiple architectural paradigms.</li>
		</ul>
		<h4 style="margin-bottom:12px">For the following role, a test will be required when the company opens an internal hiring. Googl Luck! 🚀 </h4>
	</div>
	<AstroImage src={level.image} alt="{level.name}" />
</div>