<!-- Create a calculator site -->
<script>
    import { onMount } from 'svelte';

    onMount(async () => {

        let input = document.getElementById('input') || {value: ""};
        // @ts-ignore
        input.value = window.localStorage.getItem('calc') || "";
        // @ts-ignore
        for (let i = 0; i < document.getElementsByTagName('button').length; i++) {
            document.getElementsByTagName('button')[i].addEventListener("click", () => {
                console.log("test")
                if (document.getElementsByTagName('button')[i].textContent === "=") {
                    // @ts-ignore
                    input.value = eval(input.value)
                    // @ts-ignore
                    if (input.value === "undefined") {
                        // @ts-ignore
                        input.value = ""
                    }
                } else if (document.getElementsByTagName('button')[i].textContent === "C") {
                    // @ts-ignore
                    input.value = ""
                }else {
                    // @ts-ignore
                    input.value = input.value + document.getElementsByTagName('button')[i].textContent
                }
                // @ts-ignore
                window.localStorage.setItem("calc", input.value)
            })
        }   
    });
</script>

<body>
    <div class="inner">
        <input id="input" type="text" readonly>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>.</button>
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>
            <button>C</button>
            <button>(</button>
            <button>)</button>
        </div>
    </div>
</body>

<style>
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
        height: fit-content;

        overflow: hidden;
    }

    input {
        width: 100%;
        height: 50px;
        font-size: 2rem;
        text-align: right;
        border: none;
        outline: none;
    }

    .buttons {
        margin-top: 1rem;
        /* grid */
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 5px;
    }

    button {
        padding: 1.5rem 1rem;
        /* border */
        border: 1px solid #ccc;
    }
</style>