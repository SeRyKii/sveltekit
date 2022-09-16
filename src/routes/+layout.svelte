<script>
    import "../app.css"
</script>

<div class="w-full flex flex-row items-center justify-center">
    <div class="bg-white flex flex-row px">
        <div class="navbut" on:click={() => {window.location.href = ("/")}}>Home</div>
        <div class="navbut" on:click={() => {window.location.href = ("/calc")}}>Calc</div>
        <div class="navbut" on:click={() => {window.location.href = ("/vat")}}>Vat</div>
        <div class="navbut" on:click={() => {window.location.href = ("/temp")}}>Temp</div>
</div>
</div>

<slot></slot>