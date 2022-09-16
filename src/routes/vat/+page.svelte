<script>
// @ts-nocheck

    import { onMount } from "svelte";
    let input = 0
    let vat;
    let result = 0

    function calc() {
        result = input * (1 + vat / 100)
    }
</script>

<div class="flex flex-col items-center">
    <div class="bg-white m-5 rounded-sm shadow-2xl flex flex-col items-center w-1/4 p-5">
        <!-- select field with each country and their vat -->
        <select class=" w-full p-2" bind:value={vat}>
            <option value="0">Wybierz kraj</option>
            <option value="0.23">Polska</option>
            <option value="0.19">Niemcy</option>
            <option value="0.21">Francja</option>
            <option value="0.25">Włochy</option>
            <option value="0.24">Hiszpania</option>
            <option value="0.20">Wielka Brytania</option>
            <option value="0.22">Czechy</option>
            <option value="0.24">Szwecja</option>
            <option value="0.24">Dania</option>
            <option value="0.24">Finlandia</option>
            <option value="0.24">Norwegia</option>
            <option value="0.24">Szwajcaria</option>
            <option value="0.24">Austria</option>
            <option value="0.24">Belgia</option>
            <option value="0.24">Bułgaria</option>
            <option value="0.24">Chorwacja</option>
            <option value="0.24">Cypr</option>
            <option value="0.24">Estonia</option>
            <option value="0.24">Grecja</option>
            <option value="0.24">Irlandia</option>
            <option value="0.24">Litwa</option>
            <option value="0.24">Łotwa</option>
            <option value="0.24">Luksemburg</option>
            <option value="0.24">Malta</option>
            <option value="0.24">Holandia</option>
            <option value="0.24">Portugalia</option>
            <option value="0.24">Rumunia</option>
            <option value="0.24">Słowacja</option>
            <option value="0.24">Słowenia</option>
            <option value="0.24">Węgry</option>
        </select>
        <!-- input field for price -->
        <input class="w-full text-2xl bg-slate-100 my-2" type="number" placeholder="Cena" bind:value={input}>
        <!-- button to calculate -->
        <button on:click={calc} class="w-full bg-green-400 p-2 text-4xl hover:bg-green-600">Oblicz</button>
        <!-- output field for result -->
        <input class="w-full text-2xl bg-slate-100 my-2" type="number" readonly bind:value={result}>
    </div>
</div>
