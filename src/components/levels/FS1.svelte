<script>
	import { fly, fade } from 'svelte/transition';
	import AstroImage from '../AstroImage.svelte';
	import Title from '../Title.svelte';

	let level = {
		name: 'Full Stack L1',
		description: 'Entry-level full stack developer',
		years: 1,
		image : './FS1.png'
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
			<li>Knowledge of fundamental languages ​​and frameworks</li>
			<li>Basic database management.</li>
			<li>Basic version control (Git).</li>
		</ul>

		<span style="margin-bottom:12px"> 
			For the following role, it is necessary to spend one year in the position and obtain evaluations from your lead and project references. 👩🏻‍💻 
		</span>

		<AstroImage src={level.image} alt="{level.name}" />

	</div>
</div>
