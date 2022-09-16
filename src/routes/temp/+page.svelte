<script>
    let tempInputType = "c"
    let tempInput = 0

    let hiddenTempInput = 0
    let tempOutputType = "c"
    let tempOutput = 0

    function convertToCelsius() {
        if (tempInputType === "c") {
            hiddenTempInput = tempInput
        } else if (tempInputType === "f") {
            hiddenTempInput = (tempInput - 32) * 5 / 9
        } else if (tempInputType === "k") {
            hiddenTempInput = tempInput - 273.15
        }
    }
    function convertOutput() {
        if (tempOutputType === "c") {
            tempOutput = hiddenTempInput
        } else if (tempOutputType === "f") {
            tempOutput = hiddenTempInput * 9 / 5 + 32
        } else if (tempOutputType === "k") {
            tempOutput = hiddenTempInput + 273.15
        }
        // Round to 2 decimal
        tempOutput = Math.round(tempOutput * 100) / 100
    }

    function calculate() {
        convertToCelsius()
        convertOutput()
    }
</script>

<div class="flex flex-col items-center">
    <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center h-fit w-1/4 p-5">
        <!-- input for temperature -->
        <input class="w-full p-4 text-xl bg-slate-100" type="number" bind:value={tempInput}>
        <!-- select with each temperature scale -->
        <select class="w-full p-4 my-1 text-xl" bind:value={tempInputType}>
            <option value="c">Celsius</option>
            <option value="f">Fahrenheit</option>
            <option value="k">Kelvin</option>
        </select>
        <span class="text-lg">to</span>
        <!-- select with each temperature to  tempOutputType-->
        <select class="w-full p-4 my-1 text-xl" bind:value={tempOutputType}>
            <option value="c">Celsius</option>
            <option value="f">Fahrenheit</option>
            <option value="k">Kelvin</option>
        </select>
        <!-- output for temperature -->
        {#if tempOutputType == "c"}
            <p class="text-4xl">{tempOutput}°C</p>
        {:else if tempOutputType == "f"}
            <p class="text-4xl">{tempOutput}°F</p>
        {:else if tempOutputType == "k"}
            <p class="text-4xl">{tempOutput}K</p>
        {/if}


        <button class="w-full bg-green-400 p-2 text-2xl hover:bg-green-600" on:click={calculate}>Calculate!</button>
    </div>
</div>
