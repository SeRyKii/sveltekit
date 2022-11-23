<script lang="ts">
  import { goto } from '$app/navigation';
  import { onDestroy, onMount } from 'svelte';

  // 14 different Pastel colors
  let colorPool = [
    '#F9C5D3',
    '#F9E3D3',
    '#F9F3D3',
    '#E3F9D3',
    '#D3F9E3',
    '#D3F9F3',
    '#D3E3F9',
    '#D3D3F9',
    '#E3D3F9',
    '#F3D3F9',
    '#F9D3A3',
    '#F9D3C3',
    '#F9D3D6',
    '#F9D3F9'
  ];
  export let data: { name: string; path: string; json: any }[] = [];

  let mode = 0;

  function scrambleVerticalPosition() {
    let cards = document.querySelectorAll('.tile');
    cards.forEach((card: HTMLDivElement | any) => {
      // Make random between -75 and 75 and make it more random
      let random = Math.floor(Math.random() * 200) - 100;
      card.style.setProperty('--position', `${random}px`);
    });
  }

  function scrambleCorners() {
    let cards = document.querySelectorAll('.tile');
    cards.forEach((card: HTMLDivElement | any) => {
      // Make random between -75 and 75 and make it more random
      let random1 = Math.floor(Math.random() * 50);
      let random2 = Math.floor(Math.random() * 50);
      let random3 = Math.floor(Math.random() * 50);
      let random4 = Math.floor(Math.random() * 50);
      card.style.setProperty('--top-left', `${random1}%`);
      card.style.setProperty('--top-right', `${random2}%`);
      card.style.setProperty('--bottom-left', `${random3}%`);
      card.style.setProperty('--bottom-right', `${random4}%`);
    });
  }

  function nextMode() {
    mode = (mode + 1) % 4;
  }

  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    interval = setInterval(() => {
      nextMode();
      if (mode == 0) {
      } else if (mode == 1) {
      } else if (mode == 2) {
        scrambleVerticalPosition();
      } else if (mode == 3) {
        scrambleCorners();
      } else if (mode == 4) {
        scrambleVerticalPosition();
        scrambleCorners();
      }
    }, 5000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<title>Centrum przetwarzania danych</title>

<div class="flex flex-col items-center mt-[20vh]">
  <div class="wrapper wrapper-mode-{mode}">
    {#each Object.values(data) as route, i}
      <button
        class={`tile tile-mode-${mode} flex flex-col items-center justify-center`}
        style={`background-color: ${colorPool[i]};`}
        on:click={() => {
          document.getElementById('hover-card')?.remove();
          document.body.onmousemove = null;
          goto('/' + route.path);
        }}
        on:mouseenter={(e) => {
          document.getElementById('hover-card')?.remove();
          const hoverCard = document.createElement('div');
          const hoverCardh1 = document.createElement('h1');
          const hoverCardp = document.createElement('p');
          hoverCard.classList.add(
            'bg-black',
            'p-2',
            'rounded-sm',
            'shadow-2xl',
            'w-fit',
            'absolute',
            'z-10'
          );
          hoverCardh1.classList.add('text-white', 'text-2xl');
          hoverCardp.classList.add('text-white', 'text-xl');
          hoverCardh1.innerText = route.name;
          hoverCardp.innerText = route.json.description;
          hoverCard.appendChild(hoverCardh1);
          hoverCard.appendChild(hoverCardp);
          hoverCard.style.display = 'absolue';
          hoverCard.id = 'hover-card';
          hoverCard.style.top = e.y + 'px';
          hoverCard.style.left = e.x + 'px';
          document.body.appendChild(hoverCard);
          document.body.onmousemove = (e) => {
            hoverCard.style.top = e.y + 'px';
            hoverCard.style.left = e.x + 'px';
          };
        }}
        on:mouseleave={() => {
          document.getElementById('hover-card')?.remove();
          document.onmousemove = null;
        }}
      >
        <span class="text-center">{route.name}</span>
      </button>
    {/each}
  </div>
</div>

<style>
  .tile {
    transition: height 0.5s ease-in-out, width 0.5s ease-in-out, top 0.5s ease-in-out,
      border-radius 0.5s ease-in-out, filter 0.2s ease-in-out;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  /* Make 2 vertical columns where children are distributed equally in .wrapper-mode-2 */

  .tile-mode-0 {
    height: 500px;
    width: 100px;
  }

  .tile-mode-1 {
    height: 500px;
    width: 100px;
    border-radius: 50%;
  }

  .tile-mode-2 {
    height: 200px;
    width: 120px;
  }

  .tile-mode-3 {
    height: 200px;
    width: 120px;
    border-radius: var(--top-left, 0px) var(--top-right, 0px) var(--bottom-right, 0px)
      var(--bottom-left, 0px);
  }

  .tile-mode-4 {
    height: 500px;
    width: 100px;
    border-radius: var(--top-left, 0px) var(--top-right, 0px) var(--bottom-right, 0px)
      var(--bottom-left, 0px);
  }

  .tile {
    position: relative;
    top: var(--position, 0px);
  }

  .tile:hover {
    /* filter to darken background */
    filter: brightness(0.92);
  }
</style>
