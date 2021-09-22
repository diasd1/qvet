<template>
    <div class="formulaSymbolSmall">
        <b>{{symbol}}</b>: <span>{{name}}</span> <span v-if="unit">[{{unit}}]</span>
    </div>
</template>
<script>
    export default {
        name: 'FormulaSymbolSmall',
        props: {
            symbol: String,
            name: String,
            unit: String
        }
    }
</script>

<style scoped>
    @import '../assets/css/theme/dark.css';
    @import '../assets/css/applyTheme.css';

    .formula-container {
        margin: 30px;
    }

    pre {
        font-family: "Poppins";
    }

    .formulaSymbol>h2, .formulaSymbol>h4, .formulaSymbol>h5 {
        display: inline-block;
        margin-right: 10px;
        margin-top: 0;
    }

    h2 {
        font-size: 2rem;
    }

    h4 {
        font-size: 1.2rem;
    }

    .formulaSymbol {
        background-color: var(--neutral);
        padding: 40px;
        margin: 10px 10% 10px 10%;
        border-radius: 20px;
    }

    summary:hover {
        cursor: pointer;
    }

    summary {
        text-transform: uppercase;
        letter-spacing: .1em;
        font-weight: bolder;
        color: var(--info);
    }
</style>