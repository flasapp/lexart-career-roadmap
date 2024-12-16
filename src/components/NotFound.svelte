<script>
  import { onMount } from "svelte"
	const careerLevels = [
		{ name: 'Full Stack L1', years: 1, description: 'Entry-level full stack developer', color: 'bg-blue-400', url: 'https://salehriaz.com/404Page/img/earth.svg', width: '100', rocketX: '14%', rocketY: '20%' },
		{ name: 'Full Stack L2', years: 2, description: 'Intermediate full stack developer', color: 'bg-green-400', url: './venus.png', width: '100', rocketX: '24%', rocketY: '30%' },
		{ name: 'Full Stack L3', years: 3, description: 'Senior full stack developer', color: 'bg-yellow-400', url: './mars.png', width: '100', rocketX: '34%', rocketY: '40%'},
		{ name: 'Software Arch L1', years: 4, description: 'Junior software architect', color: 'bg-orange-400', test: true, url: './jupiter.png',width: '100', rocketX: '44%', rocketY: '50%' },
		{ name: 'Software Arch L2', years: 5, description: 'Intermediate software architect', color: 'bg-red-400',url: './saturn.png',width: '100', rocketX: '54%', rocketY: '60%' },
		{ name: 'Software Arch L3', years: 6, description: 'Senior software architect', color: 'bg-purple-400',url: './uranus.png',width: '100', rocketX: '64%', rocketY: '70%' },
		{ name: 'Lead / Architect', years: 4, description: 'Team lead and architect', color: 'bg-pink-400', test: true,url: './neptune.png',width: '100', rocketX: '74%', rocketY: '80%' },
		{ name: 'Solution Architect', years: 8, description: 'Expert solution architect', color: 'bg-indigo-400', url: './pluto.png',width: '100', rocketX: '84%', rocketY: '90%' },
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
		// const planetElement = planetElements[index];
		// if (planetElement) {
    //   const rect = planetElement.getBoundingClientRect();
    //   rocketPosition = { x: rect.left + window.scrollX, y: rect.top + window.scrollY };
    //   selectedLevel = level;
    //   isRocketMoving = true;
    //   setTimeout(() => {
    //     isRocketMoving = false;
    //   }, 1000); // Match this with the animation duration
		// }
	}

  onMount(() => {

    handlePlanetClick(careerLevels[0], 0);
    // Set initial rocket position to the first planet
    // if (planetElements[0]) {
    //   const rect = planetElements[0].getBoundingClientRect();
    //   rocketPosition = { x: rect.left + window.scrollX, y: rect.top + window.scrollY };
    // }
  });

</script>

<main class="bg-purple">
  <section class="info-level">
    <h2>{ selectedLevel.name }</h2>
    <p>{ selectedLevel.description }</p>
    <small>{ selectedLevel.years }</small>
  </section>
	<div class="stars">

		<div class="central-body">
			<!-- <img class="image-404" src="https://salehriaz.com/404Page/img/404.svg" width="300px">
			<a href="https://salehriaz.com/404Page/404.html" class="btn-go-home" target="_blank">GO BACK HOME</a> -->
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
/*
VIEW IN FULL SCREEN MODE
FULL SCREEN MODE: http://salehriaz.com/404Page/404.html

DRIBBBLE: https://dribbble.com/shots/4330167-404-Page-Lost-In-Space
*/
.info-level{
  color:#f6f6f6; 
  padding: 8px; 
  border-radius:4px; 
  border: 1px dashed #f6f6f6; 
  width: 250px; 
  margin-left: 50px; 
  margin-top: 50px;
  transition: all 0.3s ease;
  /* font-size: 12px; */
  color: white;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);

  
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

.spin-earth-on-hover {
  transition: ease 200s !important;
  transform: rotate(-3600deg) !important;
}
html,
main {
  margin: 0;
  width: 100%;
  height: 100%;
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
}

.central-body {
  /*    width: 100%;*/
  padding: 17% 5% 10% 5%;
  text-align: center;
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
</style>
<!-- <styles>


</styles> -->
