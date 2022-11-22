<script>
  let distance = 0;
  let spalanie = 0;
  let cena = 0;
  let koszt = 0;

  function calc() {
    if (distance == 0 || spalanie == 0 || cena == 0) return;
    koszt = distance * (spalanie / 100) * cena;
  }

  $: distance, spalanie, cena, calc();
</script>

<div class="flex flex-col items-center">
  <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-1/4 p-5">
    <h1 class="test-4xl">Koszt podróży</h1>
    <div>
      <span>Dystans (KM)</span>
      <input type="number" class="bg-slate-200 p-1 rounded-sm" bind:value={distance} />
    </div>
    <!-- Spalanie na 100km -->
    <div>
      <span>Spalanie na 100km (L/100km)</span>
      <input type="number" class="bg-slate-200 p-1 rounded-sm" bind:value={spalanie} />
    </div>
    <!-- Cena -->
    <div>
      <span>Cena paliwa (zł)</span>
      <input type="number" class="bg-slate-200 p-1 rounded-sm" bind:value={cena} />
    </div>
    <!-- Koszt -->
    <div>
      <span>Koszt {koszt} zł</span>
    </div>
  </div>
</div>
