<script>
  let ludzi = 0;
  let krowek = 0;
  let outNaOsobe = 0;
  let outZostanie = 0;

  function calc() {
    if (ludzi == 0 || krowek == 0) return;
    outNaOsobe = Math.floor(krowek / ludzi);
    outZostanie = krowek % ludzi;
  }

  $: ludzi, krowek, calc();
</script>

<div class="flex flex-col items-center">
  <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-1/4 p-5">
    <h1 class="text-4xl">Rozdzielacz krówek</h1>
    <div class="mb-2">
      <span>Ile ludzi: </span>
      <input type="number" class="bg-slate-200 p-1 rounded-sm" bind:value={ludzi} />
    </div>
    <div class="mb-2">
      <span>Ile krówek: </span>
      <input type="number" class="bg-slate-200 p-1 rounded-sm" bind:value={krowek} />
    </div>
    <div class="p-5 pt-0">
      <p>{outNaOsobe} krówek na osobe</p>
      <p>{outZostanie} krówek zostanie</p>
    </div>
  </div>
</div>
