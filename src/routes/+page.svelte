<title>Centrum przetwarzania danych</title>

<div class="w-full flex flex-col items-center">
    <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-fit p-5">
    <span>Centrum przetwarzania danych</span>
    <div class="flex flex-row m-5">
        <!-- calculator logo -->
        <div on:click={() => {window.location.replace("/calc")}} class="calc"><img src="https://img.icons8.com/ios/50/000000/calculator.png" alt="calculator" /></div>
        <!-- vat calculator with percent as logo -->
        <div on:click={() => {window.location.replace("/vat")}} class="calc"><img src="https://img.icons8.com/percentage" alt="vat" /></div>
        <!-- temperature calculator with termometer logo -->
        <div on:click={() => {window.location.replace("/temp")}} class="calc"><img src="https://img.icons8.com/ios/50/000000/temperature.png" alt="temp" /></div>
    </div>
</div>
</div>