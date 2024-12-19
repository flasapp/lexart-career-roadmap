<script>
	import { fly, fade } from 'svelte/transition';
	import AstroImage from '../AstroImage.svelte';
	import Title from '../Title.svelte';

	let level = { 
		name: 'Software Architect L1', 
		description: 'Beginer Architect', 
		years: 3,
		image : './SA1.png'
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
			<li>Understanding architectural patterns.</li>
			<li>Analysis of technical and non-technical requirements.</li>
			<li>Evaluation of tools and technologies.</li>
		</ul>
		<h4 style="margin-bottom:12px"> For this role, it is necessary to take a test. 🥸 </h4>
	</div>
	<AstroImage src='./SA1.png' alt="{level.name}" />
</div>