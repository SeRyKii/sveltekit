<script>
  let liczbaLicencji = 0;

  let tryb = 49;
  let tryby = [
    { name: 'Standard', value: 49 },
    { name: 'Pro', value: 99 },
    { name: 'Ultimate', value: 149 }
  ];

  let kodyZnizkowe = {
    test123: 0.9
  };
  let kod = '';
  let kodZnizkowy = -1;

  let result = 0;

  function checkDiscountCode() {
    if (Object.keys(kodyZnizkowe).includes(kod)) {
      kodZnizkowy = 1;
      return true;
    } else {
      kodZnizkowy = 0;
      return false;
    }
  }

  function checkCode() {
    if (Object.keys(kodyZnizkowe).includes(kod)) {
      return true;
    } else {
      return false;
    }
  }

  function calc() {
    result = liczbaLicencji * tryb;
    if (checkCode()) {
      // @ts-ignore
      result = result * kodyZnizkowe[kod];
    }
    // @ts-ignore
    result = result.toFixed(2);
  }

  $: tryb, liczbaLicencji, kod, calc();
</script>

<div class="flex flex-col items-center">
  <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-1/4 p-5">
    <h1 class="text-4xl">Zamówienia</h1>
    <div class="my-2">
      <span>Liczba licencji</span>
      <input class="p-1 rounded-sm bg-slate-200" type="number" bind:value={liczbaLicencji} />
    </div>
    <div>
      <span>Rodzaj licencji</span>
      <!-- Radio buttons -->
      <div class="flex flex-col">
        {#each tryby as trybb}
          <label>
            <input type="radio" name="tryb" bind:group={tryb} value={trybb.value} />
            {trybb.name}
          </label>
        {/each}
      </div>
    </div>
    <div class="my-2">
      <span>Kod zniżkowy</span>
      <input
        class={`p-1 rounded-sm bg-slate-200 border-green-900 outline outline-2 transition-all duration-200 ${
          kodZnizkowy != -1
            ? kodZnizkowy == 1
              ? 'outline-green-600 outline-2'
              : 'outline-red-600 outline-2'
            : ''
        }`}
        type="text"
        bind:value={kod}
        on:change={checkDiscountCode}
      />
    </div>
    <div class="text-2xl">
      <span>Do zapłaty</span>
      <span>{result} zł</span>
    </div>
  </div>
</div>
