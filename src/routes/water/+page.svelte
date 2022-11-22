<script>
  let temp = 0;
  let result = 'ciecz';
  let image = 'https://www.chemicool.com/images/liquid.png';

  function check() {
    if (temp < 0) {
      result = 'Lód';
      image =
        'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/7/7/2/142772_shutterstock_92541790.jpg';
    } else if (temp > 100) {
      result = 'Para';
      image =
        'https://static.sciencelearn.org.nz/images/images/000/000/664/original/OBW_TEA_ACT_01_WaterSolidLiquidGas_BoilingPot.jpg?1522296023';
    } else {
      result = 'Ciecz';
      image = 'https://cdn.britannica.com/02/157502-131-7C5D3A67/water-glass-background.jpg';
    }
  }
  $: temp, check();
</script>

<div class="flex flex-col items-center">
  <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-1/4 p-5">
    <h1 class="text-4xl">Stan skupienia wody</h1>
    <div class="mb-2 flex flex-col items-center">
      <span>Temperatura: </span>
      <input type="number" class="bg-slate-200 p-1 rounded-sm" bind:value={temp} />
      <input type="range" min="-300" max="300" step="1" bind:value={temp} />
    </div>
    <div class="p-5 pt-0 flex flex-col items-center text-2xl font-bold">
      <p>{result}</p>
      <img class="h-64" src={image} alt={result} />
      <!-- Load images -->
      <img
        src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/7/7/2/142772_shutterstock_92541790.jpg"
        alt=""
        class="hidden"
      />
      <img
        src="https://static.sciencelearn.org.nz/images/images/000/000/664/original/OBW_TEA_ACT_01_WaterSolidLiquidGas_BoilingPot.jpg?1522296023"
        alt=""
        class="hidden"
      />
      <img
        src="https://cdn.britannica.com/02/157502-131-7C5D3A67/water-glass-background.jpg"
        alt=""
        class="hidden"
      />
    </div>
  </div>
</div>
