<script lang="ts">
  const emojis = [
    '👋',
    '👌',
    '👍',
    '👏',
    '👀',
    '👂',
    '👃',
    '👄',
    '👅',
    '👆',
    '👇',
    '👈',
    '👉',
    '👊',
    '👋',
    '👌',
    '👍',
    '👎',
    '👏',
    '👐',
    '👣',
    '👤',
    '👥',
    '👦',
    '👧',
    '👨',
    '👩',
    '👪',
    '👫',
    '👬',
    '👭',
    '👮',
    '👯',
    '👰',
    '👱',
    '👲',
    '👳',
    '👴',
    '👵',
    '👶',
    '👷',
    '👸',
    '👹',
    '👺',
    '👻',
    '👼',
    '👽',
    '👾',
    '👿',
    '💀',
    '💁',
    '💂',
    '💃',
    '💄',
    '💅',
    '💆',
    '💇',
    '💈',
    '💉',
    '💊',
    '💋',
    '💌',
    '💍',
    '💎',
    '💏',
    '💐',
    '💑',
    '💒',
    '💓',
    '💔',
    '💕',
    '💖',
    '💗',
    '💘',
    '💙',
    '💚',
    '💛',
    '💜',
    '💝',
    '💞',
    '💟',
    '💠',
    '💡',
    '💢',
    '💣',
    '💤',
    '💥',
    '💦',
    '💧',
    '💨'
  ];

  let borderRound = 2;
  let borderType = 0;
  let border: HTMLElement;
  function updateRound() {
    if (border) {
      border.style.setProperty('--roundness', `${borderRound}px`);
    }
  }
  $: borderRound, updateRound();

  let text = 'Hello world!';
  let emoji = '👋';

  let textEffect = {
    upperCase: false,
    capitalize: false,
    spaceBetween: false
  };
</script>

<div class="w-full flex flex-col items-center text-white">
  <h1 class="text-6xl text-white my-3 font-bold">Serduszkowe kartki</h1>

  <div
    class={` border border-white rounded-[var(--roundness)] ${
      borderType == 0 ? 'border-solid' : borderType == 1 ? 'border-dashed' : 'border-dotted'
    } w-3/4 py-5 flex flex-col items-center`}
    bind:this={border}
  >
    <span class="text-8xl">{emoji}</span>
    <span
      class={`${textEffect.upperCase ? 'uppercase' : ''} ${
        textEffect.capitalize ? 'capitalize' : ''
      } ${textEffect.spaceBetween ? 'tracking-[0.7rem]' : ''} text-2xl`}>{text}</span
    >
  </div>

  <div class="flex flex-col items-center mt-5 w-1/4">
    <span class="mb-1">Tekst kartki:</span>
    <input type="text" class="text-black w-full rounded-md p-1" bind:value={text} />
    <div class="bg-blue-600 p-5 w-full rounded-lg my-2 flex flex-col ">
      <div>
        <span>Emoji:</span>
        <select bind:value={emoji}>
          {#each emojis as emoji}
            <option value={emoji}>{emoji}</option>
          {/each}
        </select>
      </div>
    </div>

    <div class="bg-blue-600 p-5 w-full rounded-lg my-2 flex flex-col ">
      <div>
        <span>Efekty tekstowe</span>
        <div>
          <input id="wielkieLitery" type="checkbox" bind:checked={textEffect.upperCase} />
          <label for="wielkieLitery">WIELKIE LITERY</label>
        </div>
        <div>
          <input id="spaceBetween" type="checkbox" bind:checked={textEffect.spaceBetween} />
          <label for="spaceBetween">R o z s z e r z t e k s t</label>
        </div>
        <div>
          <input id="capital" type="checkbox" bind:checked={textEffect.capitalize} />
          <label for="capital">Kapitaliki</label>
        </div>
      </div>
    </div>
    <!-- Styl ramki -->

    <div class="bg-blue-600 p-5 w-full rounded-lg my-2 flex flex-col ">
      <div>
        <span>Ramka:</span>
        <div>
          <input id="full" type="radio" bind:group={borderType} value={0} />
          <label for="full">Pełna</label>
        </div>
        <div>
          <input id="line" type="radio" bind:group={borderType} value={1} />
          <label for="line">Kreskowa</label>
        </div>
        <div>
          <input id="dotted" type="radio" bind:group={borderType} value={2} />
          <label for="dotted">Kropkowa</label>
        </div>
      </div>
    </div>
    <!-- Rozmiar ramki -->

    <div class="bg-blue-600 p-5 w-full rounded-lg my-2 flex flex-col ">
      <span>Zaokrąglenie ramki:</span>
      <input type="range" min="0" max="100" step="1" bind:value={borderRound} />
    </div>
  </div>
</div>
