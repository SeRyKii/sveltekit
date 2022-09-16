<!-- Create a calculator site -->
<script>
// @ts-nocheck

    import {evalStringState} from './_store';
    let evalString = "";
    // @ts-ignore
    evalStringState.subscribe(value => {
        evalString = value;
    });
    function calc() {
        evalString = eval(evalString)
        evalStringState.set(evalString);
    }
</script>

<div class="flex flex-col items-center">
    <div class="w-1/4 bg-white m-5 rounded-sm shadow-2xl p-5 flex flex-col items-center">
        <input class="text-right w-80 bg-slate-200 p-4 font-bold text-xl" type="text" readonly bind:value={evalString}>
        <div class="grid grid-cols-4">
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "1")}}>1</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "2")}}>2</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "3")}}>3</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "4")}}>4</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "5")}}>5</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "6")}}>6</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "7")}}>7</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "8")}}>8</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "9")}}>9</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "0")}}>0</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += ".")}}>.</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "+")}}>+</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "-")}}>-</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "*")}}>*</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "/")}}>/</button>
            <button class="calcBtn" on:click={calc}>=</button>
            <button class="calcBtn" on:click={() => {evalStringState.set("")}}>C</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += "(")}}>(</button>
            <button class="calcBtn" on:click={() => {evalStringState.update(v => v += ")")}}>)</button>
        </div>
    </div>
</div>
