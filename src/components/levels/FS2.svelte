<script>
	import { fly, fade } from 'svelte/transition';
	let level = { 
		name: 'Full Stack L2', 
		description: 'Intermediate full stack developer', 
		years: 2
	};

</script>

<div>
	<h2 in:fade={{ duration: 600 }} out:fade={{ duration: 400 }}>
		{level.name}
	</h2>
	<p in:fade={{ duration: 600 }} out:fade={{ duration: 400 }}>
		{level.description}
	</p>
	<div in:fade={{ duration: 600 }} out:fade={{ duration: 400 }}>
		<h4> Mínimum duration: Two year </h4>
		<h4> Requirements </h4>
		<ul>
			<li>Code optimization and refactoring.</li>
			<li>Basic knowledge of design patterns and basic architectures.</li>
		</ul>
	</div>
</div>
