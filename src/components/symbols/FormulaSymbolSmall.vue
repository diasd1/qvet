<template>
    <div class="formulaSymbolSmall">
        <input class="numberinput" v-if="withInput" v-model="numericValue" type="number">
        <b v-html="symbol"/>: <span>{{name}}</span> <span v-if="unit">[<vue-mathjax :formula="getFormattedFormula(unit)" />]</span>
    </div>
</template>
<script>
    import {
        VueMathjax
    } from 'vue-mathjax';

    export default {
        name: 'FormulaSymbolSmall',
        props: {
            symbol: String,
            name: String,
            unit: String,
            value: String,
            withInput: Boolean
        },
        components: {
            "vue-mathjax": VueMathjax,
        },
        data() {
            return {
                numericValue: this.value
            }
        },
        methods: {
            getFormattedFormula(latexFormula) {
                const t = window.nerdamer.convertToLaTeX(latexFormula)
                return `\\(${t}\\)`;
            },
        },
        watch: {
            numericValue: function(value) {
                this.$emit("valueChange", this.symbol, (value && value.length != 0) ? value : null)
            },
            value: function(value) {
                this.numericValue = value
            }
        }
    }
</script>

<style scoped>

    .numberinput {
        margin-right: 20px;
        margin-bottom: 5px;
        max-width: 100px;
        background: none;
        border: none;
        border-bottom: 1px solid var(--text);
        color: var(--text)
    }

    .numberinput:focus {
        outline: none;
    }

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