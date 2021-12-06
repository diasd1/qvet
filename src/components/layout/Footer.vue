<template>
    <div class="footer">
        <div class="navbar">
            <p><a id="symbols" href="/">Main (Symbols)</a></p>
            <p><a id="formulas" href="/formulas">Formulas</a></p>
            <p><a id="theory" href="/theory">Theory</a></p>
        </div>
        <p id="madeBy">{{year}}, Made with ❤️ by <a href="https://github.com/dxstiny">dxstiny</a> ({{version}})</p>
    </div>
</template>

<script>
    import pkg from '/package.json';

    export default {
        name: 'Footer',
        props: {
            msg: String
        },
        data() {
            return {
                year: new Date().getFullYear(),
                version: pkg.version || "0.9.6"
            }
        }
    }
</script>

<style scoped>
    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-left: 20px;
    }

    p {
        font-size: 0.8rem;
        margin-right: 20px;
    }

    .navbar>p {
        margin-left: 0px;
        margin-right: 0px;
    }

    #madeBy {
        text-align: right;
    }

    @media only screen
    and (max-device-width : 700px)
    {
        .navbar {
            margin-left: 5px;
        }

        p {
            margin-right: 5px;
        }
    }
</style>