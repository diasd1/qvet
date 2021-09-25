<template>
    <div class="formula-container">
        <div class="formula-main">
            <a class="flexa" target="_blank" :href="`/formulas#${formula.name}`">
                <h4>{{formula.name}}</h4>
            </a>
            <vue-mathjax :formula="getConvertedFormula(formula.formula)" />
        </div>
        <div class="formula-symbols">
            <FormulaSymbolSmall v-for="(symbol, index) in symbols" :key="index" :symbol="symbol.symbol"
                :name="symbol.name" :unit="symbol.unit" />
        </div>
    </div>
</template>

<script>
    import {
        VueMathjax
    } from 'vue-mathjax';
    import FormulaSymbolSmall from "../symbols/FormulaSymbolSmall.vue"
    import db from "../../../db/main.json";

    export default {
        name: 'FormulaContainer',
        components: {
            "vue-mathjax": VueMathjax,
            FormulaSymbolSmall
        },
        data() {
            const formulaSymbols = this.getFormulaSymbols()

            const symbols = formulaSymbols.filter(x => x.formulas.find(y => y.name == this.formula.name))
            symbols.sort((a, b) => (a.symbol > b.symbol) ? 1 : ((b.symbol > a.symbol) ? -1 : 0))

            return {
                symbols
            }
        },
        props: {
            formula: Object,
            solveFor: String
        },
        methods: {
            getFormattedFormula(latexFormula) {
                const t = window.nerdamer.convertToLaTeX(latexFormula)
                return `\\(${t}\\)`;
            },
            getConvertedFormula(latexFormula) {
                let convertedFormula = window.nerdamer.solve(latexFormula, this.solveFor).toString()
                convertedFormula = convertedFormula.slice(1, convertedFormula.length - 1)
                const t = window.nerdamer(convertedFormula).toTeX()
                return `\\(${this.solveFor} = ${t}\\)`;
            },
            onDelete() {
                this.$emit("delete")
            },
            getFormula(name) {
                const r = db.formulas[name];
                r.name = name;
                return r;
            },
            getFormulaSymbols() {
                const formulaSymbols = []
                const symbols = Object.keys(db.symbols)

                for (const symbol of symbols) {
                    for (const formulaSymbol of db.symbols[symbol]) {
                        formulaSymbols.push({
                            symbol,
                            name: formulaSymbol.name,
                            description: formulaSymbol.description,
                            unit: formulaSymbol.unit,
                            formulas: formulaSymbol.formulas.map(x => this.getFormula(x))
                        })
                    }
                }

                return formulaSymbols
            }
        }
    }
</script>

<style>
    .MathJax_Display,
    .formula-container {
        text-align: left !important;
    }
</style>

<style scoped>
    .formula-container {
        background-color: var(--background);
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
    }

    .formula-main {
        flex: 1;
    }

    .formula-symbols {
        flex: 1;
    }

    h4 {
        font-size: 1.2rem;
        margin: 5px 10px 0px 0px;
    }

    .formula-name {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    a.flexa {
        display: flex;
        align-items: baseline;
        text-decoration: none;
        color: var(--text);
    }

    a.flexa:hover {
        color: var(--success);
        cursor: pointer;
    }
</style>