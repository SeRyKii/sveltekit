<script>
    import { onMount } from "svelte";


    onMount(() => {
        let input = document.getElementById("price")
        let vat = document.getElementById("select")
        let result = document.getElementById("result")

        // @ts-ignore
        document.getElementById("calculate").addEventListener("click", () => {
            // @ts-ignore
            if (vat.value === "0") {
                // @ts-ignore
                result.value = input.value
            } else {
                // @ts-ignore
                result.value = input.value * (1 - (vat.value / 100))
            }
        })
    })
</script>

<body>
    <div class="inner">
        <!-- select field with each country and their vat -->
        <select id="select">
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
        <input id="price" type="number" placeholder="Cena">
        <!-- button to calculate -->
        <button id="calculate">Oblicz</button>
        <!-- output field for result -->
        <input id="result" type="number" readonly>
    </div>
</body>

<style>
    select {
        width: 100%;
        height: 50px;
        font-size: 20px;
        margin-bottom: 10px;
    }
    input {
        width: 100%;
        height: 50px;
        font-size: 20px;
        margin-bottom: 10px;
    }
    button {
        width: 100%;
        height: 50px;
        font-size: 20px;
        margin-bottom: 10px;
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