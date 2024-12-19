<script>
  //core
  import { onMount } from "svelte"
  //utils and helpers
  import { fade, fly } from 'svelte/transition';
  import levels from '/src/lib/js/levels.js';
  //components
  import FS1 from '/src/components/levels/FS1.svelte';
  import FS2 from '/src/components/levels/FS2.svelte';
  import FS3 from '/src/components/levels/FS3.svelte';
  import SA1 from '/src/components/levels/SA1.svelte';
  import SA2 from '/src/components/levels/SA2.svelte';
  import SA3 from '/src/components/levels/SA3.svelte';
  import SO from '/src/components/levels/SO.svelte';



	// const careerLevels = levels;
  const careerLevels = [
    {
        name: 'Full Stack L1', url: 'https://salehriaz.com/404Page/img/earth.svg', width: '100', rocketX: '14%', rocketY: '30%', component: FS1
    },
    { name: 'Full Stack L2', url: './venus.png', width: '100', rocketX: '24%', rocketY: '40%', component: FS2 },
    { name: 'Full Stack L3', url: './mars.png', width: '100', rocketX: '34%', rocketY: '50%', component: FS3  },
    { name: 'Software Architect L1', url: './jupiter.png',width: '100', rocketX: '44%', rocketY: '60%', component: SA1 },
    { name: 'Software Architect L2', url: './saturn.png',width: '100', rocketX: '54%', rocketY: '70%', component: SA2 },
    { name: 'Software Architect L3', url: './uranus.png',width: '100', rocketX: '64%', rocketY: '80%', component: SA3 },
    { name: 'Solution Architect', url: './pluto.png',width: '100', rocketX: '74%', rocketY: '90%', component: SO },
];

  let selectedLevel = careerLevels[0];
  let selectedIndex = 0;
  let rocketPosition = { x: 0, y: 0 };
  let isRocketMoving = false;
  let planetElements = [];

	function handlePlanetClick(level, index, event) {
    let destinyPositionY = careerLevels[index].rocketY;
    let destinyPositionX = careerLevels[index].rocketX;
    isRocketMoving = true
    setTimeout(() => {
      isRocketMoving = false;
    }, 1000); // Match this with the animation duration
    document.querySelector('.object_rocket').style.left = destinyPositionX;
    document.querySelector('.object_rocket').style.bottom = destinyPositionY;
    selectedLevel = level;
    selectedIndex = index;
	}

  onMount(() => {
    handlePlanetClick(careerLevels[0], 0);
  });

</script>

<main class="bg-purple">
  <div class="stars">
    {#key selectedLevel.url}
      <section class="info-level" in:fly={{ y: -200, duration: 400, delay: 400 }} out:fly={{ y: -200, duration: 400 }}>
        <svelte:component this={selectedLevel.component} />
        <div style="display: flex; justify-content:space-evenly; gap: 1rem">
          <button style="width: 100%" on:click={() => handlePlanetClick(careerLevels[selectedIndex - 1], selectedIndex - 1)} disabled='{selectedIndex == 0}'> Previous </button>
          <button style="width: 100%" on:click={() => handlePlanetClick(careerLevels[selectedIndex + 1], selectedIndex + 1)} disabled='{selectedIndex == careerLevels.length - 1}'> Next </button>
        </div>
        
      </section>
    {/key}
  </div>
  
	<div class="stars levels-container">

		<div class="central-body">
		</div>
		<div class="objects">
			<img class="object_rocket { isRocketMoving ? 'rocket-moving' : ''}" src="https://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="Rocket">
			<div class="earth-moon">
				<img class="object_moon" src="https://salehriaz.com/404Page/img/moon.svg" width="80px" alt="Moon">
			</div>
			<div class="solar-system">
				{#each careerLevels as level, index}
					<a 
						class="planet-level" 
						style="bottom: {10 + (index * 10)}%; left: {10 + (index * 10)}%" 
						on:click={() => handlePlanetClick(level, index, event)}
            href=/#>
						  <img src="{level.url}" alt="{level.name}" width={level.width} class="{selectedIndex == index ? 'object_planet' : ''}"/>
						  {level.name}
					</a>
				{/each}
			</div>
			<div class="box_astronaut">
				<!-- <img class="object_astronaut" src="https://salehriaz.com/404Page/img/astronaut.svg" width="140px"> -->
			</div>
		</div>
		<div class="glowing_stars">
			<div class="star"></div>
			<div class="star"></div>
			<div class="star"></div>
			<div class="star"></div>
			<div class="star"></div>
		</div>

	</div>

</main>
<style>

.info-level{
  color:#f6f6f6; 
  padding: 32px; 
  border-radius:4px; 
  width: 1000px; 
  /* margin-left: 50px;  */
  /* margin-top: 50px; */
  transition: all 0.3s ease;
  /* font-size: 12px; */
  color: white;
  /* Glass effect */
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(7.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: grid;
  z-index: 2;
  position: absolute;
  
}

.planet-level {
  position: absolute;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: white;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.solar-system{
  margin-left: -50%;
}

/* @import url("https://fonts.googleapis.com/css?family=Dosis:300,400,500"); */


.spin-earth-on-hover {
  transition: ease 200s !important;
  transform: rotate(-3600deg) !important;
}
html,
main {
  margin: 0;
  width: 100%;
  height: 100%;
  min-height: 600px;
  min-width: 1200px;
  font-weight: 300;
  height: 100vh !important;
  -webkit-user-select: none;
  /* Safari 3.1+ */
  -moz-user-select: none;
  /* Firefox 2+ */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Standard syntax */
}

.bg-purple {
  background: url(https://salehriaz.com/404Page/img/bg_purple.png);
  background-repeat: repeat-x;
  background-size: cover;
  background-position: left top;
  height: 100%;
  overflow: hidden;
  padding: 5% 10%;
}

.central-body {
    width: 100%;
    padding: 15% 5% 10% 10%;
    margin-left: -5%;
  /* text-align: center; */
}

.objects img {
  z-index: 90;
  pointer-events: none;
}

.object_rocket {
  z-index: 95;
  position: absolute;
  pointer-events: none;
  transition: all 1s ease-in-out;
}

.object_planet {
  animation: spin-earth 100s infinite linear both;
}

.object_moon {
  position: absolute;
  top: 12%;
  left: 25%; 
  transform: rotate(0deg);
  transition: transform ease-in 99999999999s;

}

.box_astronaut {
  z-index: 110 !important;
  position: absolute;
  top: 60%;
  right: 20%;
  will-change: transform;
  animation: move-astronaut 50s infinite linear both alternate;
}

.stars {
  background: url(https://salehriaz.com/404Page/img/overlay_stars.svg);
  background-repeat: repeat;
  background-size: contain;
  background-position: left top;
}
.levels-container {
  position: absolute;
  width: 80%;
  bottom: 50px;
  left: 10%;
}
.glowing_stars .star {
  position: absolute;
  border-radius: 100%;
  background-color: #fff;
  width: 3px;
  height: 3px;
  opacity: 0.3;
  will-change: opacity;
}

.glowing_stars .star:nth-child(1) {
  top: 80%;
  left: 25%;
  animation: glow-star 2s infinite ease-in-out alternate 1s;
}

.glowing_stars .star:nth-child(2) {
  top: 20%;
  left: 40%;
  animation: glow-star 2s infinite ease-in-out alternate 3s;
}

.glowing_stars .star:nth-child(3) {
  top: 25%;
  left: 25%;
  animation: glow-star 2s infinite ease-in-out alternate 5s;
}

.glowing_stars .star:nth-child(4) {
  top: 75%;
  left: 80%;
  animation: glow-star 2s infinite ease-in-out alternate 7s;
}

.glowing_stars .star:nth-child(5) {
  top: 90%;
  left: 50%;
  animation: glow-star 2s infinite ease-in-out alternate 9s;
}


.rocket-moving {
    animation: rocketTurbulence 0.5s ease-in-out infinite;
}

@keyframes rocketTurbulence {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(-5px, -5px) rotate(-5deg); }
    50% { transform: translate(5px, 5px) rotate(5deg); }
    75% { transform: translate(-5px, 5px) rotate(-5deg); }
}

button{
  padding: 8px;
  background: #f2f2f2;
  border: 1px solid #666;
  color: #666;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
}
button:disabled{
  background: #666;
  color: #f2f2f2;
  cursor: not-allowed;
  transition: all 0.3s ease;
}

@-moz-keyframes rocket-movement {
  100% {
    -moz-transform: translate(1200px, -600px);
  }
}
@-webkit-keyframes rocket-movement {
  100% {
    -webkit-transform: translate(1200px, -600px);
  }
}
@keyframes rocket-movement {
  100% {
    transform: translate(1200px, -600px);
  }
}
@-moz-keyframes spin-earth {
  100% {
    -moz-transform: rotate(-360deg);
    transition: transform 20s;
  }
}
@-webkit-keyframes spin-earth {
  100% {
    -webkit-transform: rotate(-360deg);
    transition: transform 20s;
  }
}
@keyframes spin-earth {
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    transition: transform 20s;
  }
}

@-moz-keyframes glow-star {
  40% {
    -moz-opacity: 0.3;
  }
  90%,
  100% {
    -moz-opacity: 1;
    -moz-transform: scale(1.2);
  }
}
@-webkit-keyframes glow-star {
  40% {
    -webkit-opacity: 0.3;
  }
  90%,
  100% {
    -webkit-opacity: 1;
    -webkit-transform: scale(1.2);
  }
}
@keyframes glow-star {
  40% {
    -webkit-opacity: 0.3;
    opacity: 0.3;
  }
  90%,
  100% {
    -webkit-opacity: 1;
    opacity: 1;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-radius: 999999px;
  }
}
</style>
