<script>
	import { fly, fade } from 'svelte/transition';
	let level = {
		name: 'Full Stack L1',
		description: 'Entry-level full stack developer',
		years: 1
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
		<h4> Mínimum duration: One year </h4><h4> Requirements </h4>
		<ul>
			<li>Knowledge of fundamental languages ​​and frameworks</li>
			<li>Basic database management.</li>
			<li>Basic version control (Git).</li>
		</ul>
	</div>
</div>
