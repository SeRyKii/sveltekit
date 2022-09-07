<script>
    import { onMount } from "svelte";
    let quote = "";

    onMount(async () => {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        quote = data.content;
        for (let i = 0; i < document.getElementsByClassName('calc').length; i++) {
            document.getElementsByClassName('calc')[i].addEventListener("click", () => {
                window.location.href = (document.getElementsByClassName('calc')[i].getAttribute('data-url') || "/");
            })
        }
    });
</script>

<title>Centrum przetwarzania danych</title>

<body>
    <div class="inner">
        <!-- random icon as logo -->
        <div class="header">
            
            <div>
                <span>Centrum przetwarzania danych</span>
                <p>Quote of the day: {quote}</p>
                <div class="apps">
                    <!-- calculator logo -->
                    <div data-url="/calc" class="calc"><img src="https://img.icons8.com/ios/50/000000/calculator.png" alt="calculator" /></div>
                    
                </div>
            </div>
        </div>
    </div>
</body>

<style>
    /* background gradient */
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

    span {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        margin-left: 1rem;
    }

    .header > img {
        width: 200px;
        height: 200px;
    }

    .inner div .apps img {
        width: 60px;
        height: 60px;
    }

    .header {
        display: flex;
        flex-direction: row;
    }

    .apps {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .calc {
        background-color: #fff;
        /* shadow */
        box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.50);
        /* border radius */
        border-radius: 4px;
        /* padding */
        padding: 0.1rem;

        margin: 5px 0.7rem;
    }

    .calc:hover {
        background-color: #17ddef;
        transition: all;
        transition-duration: 0.5s;
    }

</style>