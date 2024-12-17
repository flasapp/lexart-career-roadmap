<script>
	import { fly, fade } from 'svelte/transition';
	let level = { 
		name: 'Full Stack L2', 
		description: 'Intermediate full stack developer', 
		years: 2
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
		<span> Mínimum duration for next role: 1 year</span>
		<h4 style="margin-bottom:-4px"> Capabilities/Skills: </h4>
		<ul>
			<li>Code optimization and refactoring.</li>
			<li>Basic knowledge of design patterns and basic architectures.</li>
		</ul>

		<h4 style="margin-bottom:12px"> 
			For the following role, it is necessary to spend one year in the position and obtain evaluations from your lead and project references. 👩🏻‍💻 
		</h4>
	</div>
</div>