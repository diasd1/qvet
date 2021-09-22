<template>
    <div class="formulaSymbol" v-if="!hidden">
        <h2>{{symbol}}</h2><h4>{{name}}</h4><h5 v-if="unit">{{"in " + unit}}</h5>
        <details open>
            <summary>Formulas</summary>
            <div class="formula-container" v-for="(formula, index) in formulas" :key="index">
                <vue-mathjax  :formula="formula" />
            </div>
        </details>
        <details>
            <summary>Description</summary>
            {{description}}
        </details>
    </div>
</template>
<script>
    import {VueMathjax} from 'vue-mathjax';

    export default {
        name: 'FormulaSymbol',
        props: {
            symbol: String,
            name: String,
            unit: String,
            description: String,
            formulas: Array,
            filter: String
        },
        components: {
            "vue-mathjax": VueMathjax
        },
        data() {
            return {
                hidden: false
            }
        },
        methods: {
            getKeyWords() {
                const t = `${this.symbol ? this.symbol : ""} ${this.name ? this.name : ""} ${this.unit ? this.unit : ""}`.toLowerCase()
                return t;
            }
        },
        watch: {
            filter: function() {
                this.hidden = !this.getKeyWords().includes(this.filter.toLowerCase())
            }
        }
    }
</script>

<style>
    .MathJax_Display, .formula-container {
        text-align: left !important;
    }
</style>

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
        margin: 10px 40px 10px 40px;
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