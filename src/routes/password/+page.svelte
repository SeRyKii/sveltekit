<script>
  let input = '';
  let result = '';
  let type = 'password';

  function toggleType() {
    type = type === 'password' ? 'text' : 'password';
  }

  // @ts-ignore
  function bypass(e) {
    // @ts-ignore
    input = type.match(/^(number|range)$/) ? +e?.target?.value : e.target.value;
  }

  function checkPasswordStrength() {
    let strength = 0;
    if (input.length > 8) {
      strength += 1;
    }
    if (input.match(/[a-z]+/)) {
      strength += 1;
    }
    if (input.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (input.match(/[0-9]+/)) {
      strength += 1;
    }
    if (input.match(/[$@#&!]+/)) {
      strength += 1;
    }
    switch (strength) {
      case 0:
        result = 'Password is too weak';
        break;
      case 1:
        result = 'Password is weak';
        break;
      case 2:
        result = 'Password is good';
        break;
      case 3:
        result = 'Password is strong';
        break;
      case 4:
        result = 'Password is very strong';
        break;
      case 5:
        result = 'Password is extremely strong';
        break;
    }
  }

  $: input, checkPasswordStrength();
</script>

<div class="flex flex-col items-center">
  <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-1/4 p-5">
    <h1 class="text-4xl">Siła hasła</h1>
    <div class="mt-2">
      <span>Hasło: </span>
      <!-- Add eye to show and hide password -->
      <input {type} class="bg-slate-200 p-1 rounded-sm" on:input={bypass} />
      <button on:click={toggleType}>👁️</button>
    </div>
    <div class="my-4">
      <span>{result}</span>
    </div>
  </div>
</div>
