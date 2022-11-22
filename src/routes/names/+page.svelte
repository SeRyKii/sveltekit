<script>
  let name = '';
  let generationType = 'API';
  let generationTypes = ['API', 'losowe Liczby', 'losowy Wyraz'];
  let result = '';

  function generate() {
    if (generationType == 'API') {
      // username generation using API
      fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => {
          result = data.results[0].login.username;
        });
    } else if (generationType == 'losowe Liczby') {
      result = `${Math.floor(Math.random() * 100)} ${name} ${Math.floor(Math.random() * 100)}`;
    } else if (generationType == 'losowy Wyraz') {
      fetch('https://random-word-api.herokuapp.com/word?number=1')
        .then((res) => res.json())
        .then((data) => {
          result = `${data[0]} ${name}`;
        });
    }
  }
  $: name, generationType, generate();
</script>

<div class="flex flex-col items-center">
  <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-1/4 p-5">
    <h1 class="text-4xl">Generator nazw</h1>
    {#if generationType != 'API'}
      <div class="mt-2">
        <span>Nazwa: </span>
        <input type="text" class="bg-slate-200 p-1 rounded-sm" bind:value={name} />
      </div>
    {/if}
    <div class="mt-2">
      <span>Typ generacji: </span>
      <select class="bg-slate-200 p-1 rounded-sm" bind:value={generationType}>
        {#each generationTypes as type}
          <option value={type}>{type}</option>
        {/each}
      </select>
    </div>
    <button class="bg-green-700 p-1 rounded-sm w-full my-2 hover:bg-green-800" on:click={generate}
      >Generuj</button
    >
    <div>
      <span class="text-2xl">{result}</span>
    </div>
    <!-- Regenerate -->
  </div>
</div>
