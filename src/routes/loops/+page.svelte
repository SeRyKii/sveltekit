<script>
  let from = 0;
  let to = 0;
  let result = '';

  function seq() {
    if (from == 0 || to == 0) return;
    let arr = [];
    for (let i = from; i <= to; i++) {
      arr.push(i);
    }
    result = arr.join(', ');
  }

  $: from, to, seq();
</script>

<div class="flex flex-col items-center">
  <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-1/4 p-5">
    <h1 class="text-4xl">Sekwencja</h1>
    <div class="mt-2">
      <span>Od: </span>
      <input type="number" class="bg-slate-200 p-1 rounded-sm" bind:value={from} />
    </div>
    <div class="my-4">
      <span>Do: </span>
      <input type="number" class="bg-slate-200 p-1 rounded-sm" bind:value={to} />
    </div>
    <div>
      <span>{result}</span>
    </div>
  </div>
</div>
