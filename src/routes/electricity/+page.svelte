<script lang="ts">
  let urzadzenia = [
    { name: 'Komputer', watt: 650 },
    { name: 'Lodówka', watt: 700 },
    { name: 'Telewizor', watt: 400 },
    { name: 'Pralka', watt: 2000 },
    { name: 'Suszarka', watt: 200 },
    { name: 'Klimatyzacja', watt: 100 },
    { name: 'Odkurzacz', watt: 600 },
    { name: 'Kompresor', watt: 600 },
    { name: 'Kuchenka mikrofalowa', watt: 650 }
  ];

  let selectedUrządzenia: any = [];
  let czas = 0;
  let cena = 0;
  let wykorzystanie = 0;
  let koszt = 0;

  function calc() {
    if (czas == 0 || cena == 0) return;
    wykorzystanie = 0;
    selectedUrządzenia.forEach((urzadzenie: any) => {
      wykorzystanie += urzadzenie.watt;
    });
    koszt = wykorzystanie * czas * cena;
    wykorzystanie = wykorzystanie * czas;
  }

  $: selectedUrządzenia, czas, cena, calc();
</script>

<div class="flex flex-col items-center">
  <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-1/4 p-5">
    <h1 class="text-4xl">Koszt energii elektrycznej</h1>
    <div class="flex flex-col items-center">
      <span class="text-2xl ">Urządzenia: </span>
      {#each urzadzenia as urzadzenie}
        <div>
          <input
            name={urzadzenie.name}
            id={urzadzenie.name}
            type="checkbox"
            bind:group={selectedUrządzenia}
            value={urzadzenie}
          />
          <label for={urzadzenie.name}>{urzadzenie.name}</label>
        </div>
      {/each}
    </div>
    <div class="my-2">
      <span>Czas (h): </span>
      <input type="number" class="bg-slate-200 p-1 rounded-sm" bind:value={czas} />
    </div>
    <div class="mb-2">
      <span>Cena (kWh): </span>
      <input type="number" class="bg-slate-200 p-1 rounded-sm" bind:value={cena} />
    </div>
    <div class="text-2xl">
      <span>Wykorzystanie: {wykorzystanie} kWh</span>
      <span>Koszt: {koszt} zł</span>
    </div>
  </div>
</div>
