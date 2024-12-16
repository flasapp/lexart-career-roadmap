<script>
	import { fly, fade } from 'svelte/transition';
	let level = { 
		name: 'Full Stack L3', 
		description: 'Advanced full stack developer', 
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
			<li>Complete command of technological stack.</li>
			<li>Solving complex problems.</li>
			<li>Introduction of technical improvements and process optimization.</li>
		</ul>
	</div>
</div>
