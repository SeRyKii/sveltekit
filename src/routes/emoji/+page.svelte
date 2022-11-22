<script>
  let input = '#foka :)';
  let output = '';

  function format() {
    output = input
      .replaceAll(':)', '😊')
      .replaceAll(':(', '😢')
      .replaceAll(':D', '😁')
      .replaceAll(':P', '😛')
      .replaceAll(':O', '😮')
      .replaceAll(':/', '😕')
      .replaceAll(':|', '😐')
      .replaceAll(':*', '😘')
      .replaceAll(':S', '😖')
      .replaceAll(':X', '😶')
      .replaceAll(':$', '😳')
      .replaceAll(':B', '😎')
      .replaceAll(':@', '😠')
      .replaceAll(':L', '😒')
      .replaceAll(':Z', '😴')
      .replaceAll(':Q', '😕')
      .replaceAll(':T', '😤')
      .replaceAll(':!', '😱')
      .replaceAll(':V', '😡')
      .replaceAll(':K', '😷')
      .replaceAll(':C', '😞')
      .replaceAll(':E', '😓')
      .replaceAll(':W', '😨')
      .replaceAll(':U', '😣')
      .replaceAll(':G', '😬')
      .replaceAll(':I', '😲')
      .replaceAll(':J', '😵')
      .replaceAll(':H', '😜')
      .replaceAll(':F', '😝')
      .replaceAll(':N', '😪')
      .replaceAll(':M', '😫')
      .replaceAll(':Y', '😭')
      .replaceAll(':R', '😦')
      .replaceAll(':0', '😮')
      .replaceAll(':3', '😍')
      .replaceAll(':5', '😘')
      .replaceAll(':6', '😚')
      .replaceAll(':7', '😋')
      .replaceAll(':8', '😜')
      .replaceAll(':9', '😝')
      .replaceAll(':4', '😗')
      .replaceAll(':2', '😏')
      .replaceAll(':1', '😃')
      .replaceAll('#foka', '🐬')
      .replaceAll('<3', '❤️')
      .replaceAll('</3', '💔')
      .replaceAll(':-)', '😊')
      .replaceAll(':-(', '😢')
      .replaceAll(':-D', '😁')
      .replaceAll(':-P', '😛')
      .replaceAll(':-O', '😮')
      .replaceAll(':-/', '😕')
      .replaceAll(':-|', '😐')
      .replaceAll(':-*', '😘')
      .replaceAll(':-S', '😖');
  }

  $: input, format();
</script>

<div class="flex flex-col items-center">
  <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-1/4 p-5">
    <h1 class="text-4xl my-5">Text na emoji</h1>
    <div>
      <input class="bg-slate-200 rounded-sm p-1" type="text" bind:value={input} />
    </div>
    <span class="text-2xl mt-4">Sformatowany tekst: {output}</span>
  </div>
</div>
