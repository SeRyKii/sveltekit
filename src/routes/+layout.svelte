<script>

</script>

<div class="nav">
        <div on:click={() => {window.location.href = ("/")}}>Home</div>
        <div on:click={() => {window.location.href = ("/calc")}}>Calc</div>
</div>

<slot></slot>

<style>
    .nav {
        margin-top: -7px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        width: 100vw;
    }

    .nav > div {
        cursor: pointer;
        padding: 2rem 0;
        flex-grow: 1;
        text-align: center;
    }

    .nav > div:hover {
        background-color: #eee;

    }
</style>