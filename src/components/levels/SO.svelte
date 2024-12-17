<script>
	import { fly, fade } from 'svelte/transition';
	let level = { 
		name: 'Software Architect L3', 
		description: 'Advanced Architect', 
		years: 3
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
			<li>Strategic thinking.</li>
			<li>Comprehensive vision.</li>
			<li>Negotiation skills.</li>
			<li>Domain of architecture methodologies and frameworks.</li>
			<li>Conflict resolution.</li>

		</ul>
		<h4 style="margin-bottom:12px"> For this role, it is necessary to take a test. 🥸 </h4>

	</div>
</div>