<template>
    <div class="formulaSymbol" :class="{ 'hidden': hidden }">
        <a class="anchor" :id="symbol">
            <h2><formula :formula="getFormattedFormula(symbol)"/></h2>
            <h4>{{name}}</h4>
            <h5 v-if="unit">in <formula :formula="getFormattedFormula(unit)"/></h5>
        </a>
        <details open>
            <summary>Formulas</summary>
            <FormulaContainer v-for="(formula, index) in formulas" :key="index" :solveFor="symbol" :formula="formula" />
        </details>
        <details>
            <summary>Description</summary>
            {{description}}
        </details>
    </div>
</template>
<script>
    import Formula from '../formulas/Formula.vue'
    import FormulaContainer from "../formulas/FormulaContainer.vue"

    export default {
        name: 'FormulaSymbol',
        props: {
            symbol: String,
            name: String,
            unit: String,
            description: String,
            formulas: Array,
            filter: Object
        },
        components: {
            FormulaContainer,
            Formula
        },
        data() {
            return {
                hidden: false
            }
        },
        methods: {
            getFormattedFormula(latexFormula) {
                try {
                    const t = window.nerdamer.convertToLaTeX(latexFormula)
                    return `\\(${t}\\)`;
                } catch (e) { console.error(e) }
                try {
                    let t = window.nerdamer.convertToLaTeX(latexFormula.replaceAll("°", "CDEGREE"))
                    t = t.replaceAll("CDEGREE", "°")
                    return `\\(${t}\\)`;
                } catch (e) { console.error(e) }
                return latexFormula;
            },
            filterSymbol(filter) {
                if (!filter.symbol || filter.symbol == "(any)")
                {
                    return false;
                }

                const t = (this.symbol ? this.symbol : "").toLowerCase()
                return !filter.symbol.toLowerCase().includes(t);
            },
            filterUnit(filter) {
                if (!filter.unit || filter.unit == "(any)")
                {
                    return false;
                }

                const t = (this.unit ? this.unit : "None").toLowerCase()
                return !filter.unit.toLowerCase().includes(t);
            },
            filterName(filter) {
                if (!filter.name || filter.name == "(any)")
                {
                    return false;
                }

                const t = (this.name ? this.name : "").toLowerCase()
                return !filter.name.toLowerCase().includes(t);
            }
        },
        watch: {
            filter: {
                handler: function() {
                    this.hidden = this.filterSymbol(this.filter) || this.filterUnit(this.filter) || this.filterName(this.filter)
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    .formula-container {
        margin: 30px;
    }

    pre {
        font-family: "Poppins";
    }

    .formulaSymbol>a>h2, .formulaSymbol>a>h4, .formulaSymbol>a>h5 {
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

    @media only screen
    and (max-device-width : 700px)
    {
        .formulaSymbol {
            padding: 5px;
            margin: 10px 0 10px 0;
            border-radius: 0;
        }
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