<script>
	import { fly, fade } from 'svelte/transition';
	import AstroImage from '../AstroImage.svelte';
	import Title from '../Title.svelte';

	let level = { 
		name: 'Full Stack L3', 
		description: 'Advanced full stack developer', 
		years: 2,
		image : './FS3.png'
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
			<li>Complete command of technological stack.</li>
			<li>Solving complex problems.</li>
			<li>Introduction of technical improvements and process optimization.</li>
		</ul>
		<h4 style="margin-bottom:12px">For the following role, a test will be required. Googl Luck! 🚀 </h4>
	</div>
	<AstroImage src={level.image} alt="{level.name}" />

</div>
