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

<body>
    <div class="inner">
        <!-- input for temperature -->
        <input type="number" bind:value={tempInput}>
        <!-- select with each temperature scale -->
        <select bind:value={tempInputType}>
            <option value="c">Celsius</option>
            <option value="f">Fahrenheit</option>
            <option value="k">Kelvin</option>
        </select>
        <span>to</span>
        <!-- select with each temperature to  tempOutputType-->
        <select bind:value={tempOutputType}>
            <option value="c">Celsius</option>
            <option value="f">Fahrenheit</option>
            <option value="k">Kelvin</option>
        </select>
        <!-- output for temperature -->
        {#if tempOutputType == "c"}
            <p>{tempOutput}°C</p>
        {:else if tempOutputType == "f"}
            <p>{tempOutput}°F</p>
        {:else if tempOutputType == "k"}
            <span>{tempOutput}K</span>
        {/if}


        <button on:click={calculate}>Calculate!</button>
    </div>
</body>

<style>
    input {
        width: 100%;
        height: 50px;
        font-size: 20px;
        text-align: center;
    }
    select
    {
        width: 100%;
        height: 50px;
        font-size: 20px;
        text-align: center;
    }
    p {
        width: 100%;
        height: 50px;
        font-size: 20px;
        text-align: center;
    }
    button {
        width: 100%;
        height: 50px;
        font-size: 20px;
        text-align: center;
    }

    span {
        font-size: 20px;
        /* center it */
        display: block;
        text-align: center;

    }
    body {
        background: linear-gradient(to right,#17ddef, darkblue);
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .inner {
        background-color: #fff;
        /* shadow */
        box-shadow: 0px 10px 20px 10px rgba(0,0,0,0.50);
        /* border radius */
        border-radius: 10px;
        /* padding */
        padding: 20px;

        max-width: 50vw;
        max-height: 50vh;

    }
</style>