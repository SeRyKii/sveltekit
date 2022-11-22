<script>
  let font = 'Arial';
  let fontSize = 16;
  let color = 'rgb(255,255,255)';
  let weight = 500;
  let style = 'normal';
  let tekst = 'Testowy tekst';
  let rgb = 'rgb(255,255,255)';
  let r = 0;
  let g = 0;
  let b = 0;

  // @ts-ignore
  function toHex(r, g, b) {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  // convert rgb to hex
  $: r, g, b, (rgb = color == 'custom' ? toHex(r, g, b) : color);
</script>

<div class="w-full h-full flex flex-row justify-center">
  <div class="w-fit p-5 bg-white rounded-sm mt-5 shadow-md">
    <h1 class="text-4xl w-full text-center">Typografia</h1>
    <h2
      class="w-full text-center my-5"
      style={`font-family: '${font}'; font-size: ${fontSize}px; color: ${rgb}; font-weight: ${weight}; font-style: ${style};`}
    >
      {tekst}
    </h2>
    <div>
      <label for="txt">Testowy tekst</label>
      <input
        type="text"
        id="txt"
        placeholder="Wpisz tekst"
        class="bg-inherit p-1 border-[1px]"
        bind:value={tekst}
      />
    </div>
    <div class="w-full flex flex-col items-center">
      <div>
        <label for="font">Czcionka: </label>
        <select id="font" bind:value={font}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="custom">Własny</option>
        </select>
        {#if font == 'custom'}
          <input type="text" bind:value={font} />
        {/if}
      </div>
      <div>
        <label for="color">Kolor: </label>
        <input type="radio" name="color" id="bialy" value={'rgb(255,255,255)'} bind:group={color} />
        Biały
        <input type="radio" name="color" id="czarny" value={'rgb(0,0,0)'} bind:group={color} />
        Czarny
        <input type="radio" name="color" id="zolty" value={'rgb(255,255,0)'} bind:group={color} />
        Żółty
        <input type="radio" name="color" id="wlasny" value={'custom'} bind:group={color} /> Własny
        {#if color == 'custom'}
          <div class="flex flex-col items-center">
            <div class="w-[240px]">
              <span>R:</span>
              <input type="range" name="r" min="0" max="255" bind:value={r} />
              <span>{r}</span>
            </div>
            <div class="w-[240px]">
              <span>G:</span>
              <input type="range" name="g" min="0" max="255" bind:value={g} />
              <span>{g}</span>
            </div>
            <div class="w-[240px]">
              <span>B:</span>
              <input type="range" name="b" min="0" max="255" bind:value={b} />
              <span>{b}</span>
            </div>
          </div>
        {/if}
      </div>
      <div>
        <label for="size">Rozmiar: </label>
        <select for="size" bind:value={fontSize}>
          <option value={12}>12</option>
          <option value={14}>14</option>
          <option value={16}>16</option>
          <option value={18}>18</option>
          <option value={20}>20</option>
          <option value={22}>22</option>
          <option value={24}>24</option>
          <option value={26}>26</option>
          <option value={28}>28</option>
          <option value={30}>30</option>
          <option value={32}>32</option>
          <option value={34}>34</option>
          <option value={36}>36</option>
          <option value={38}>38</option>
          <option value={40}>40</option>
          <option value={42}>42</option>
          <option value={44}>44</option>
          <option value={46}>46</option>
          <option value={48}>48</option>
          <option value={50}>50</option>
          <option value={52}>52</option>
          <option value={54}>54</option>
          <option value={56}>56</option>
          <option value={58}>58</option>
          <option value={60}>60</option>
          <option value={62}>62</option>
          <option value={64}>64</option>
          <option value={66}>66</option>
          <option value={68}>68</option>
          <option value={70}>70</option>
          <option value={72}>72</option>
          <option value={74}>74</option>
          <option value={76}>76</option>
          <option value={78}>78</option>
          <option value={80}>80</option>
          <option value={82}>82</option>
          <option value={84}>84</option>
          <option value={86}>86</option>
          <option value={88}>88</option>
          <option value={90}>90</option>
          <option value={92}>92</option>
          <option value={94}>94</option>
          <option value={96}>96</option>
          <option value={98}>98</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div>
        <label for="weight">Grubość: </label>
        <select for="weight" bind:value={weight}>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={300}>300</option>
          <option value={400}>400</option>
          <option value={500}>500</option>
          <option value={600}>600</option>
          <option value={700}>700</option>
          <option value={800}>800</option>
          <option value={900}>900</option>
        </select>
      </div>
      <div>
        <label for="style">Styl: </label>
        <select for="style" bind:value={style}>
          <option value={'normal'}>Normalny</option>
          <option value={'italic'}>Kursywa</option>
          <option value={'oblique'}>Pochyła</option>
        </select>
      </div>
    </div>
  </div>
</div>
