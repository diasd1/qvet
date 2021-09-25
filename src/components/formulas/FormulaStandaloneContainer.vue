<template>
    <div class="formula-container" :class="{ 'hidden': hidden }">
        <a class="anchor" :id="formula.name"><h4>{{formula.name}}</h4></a>
        <vue-mathjax :formula="getFormattedFormula(formula.formula)" />
        <br><br>
        <FormulaSymbolSmall @valueChange="valueChange" v-for="(symbol, index) in symbols" :key="index" :withInput="true" :value="symbol.value" :symbol="symbol.symbol" :name="symbol.name" :unit="symbol.unit" />
    </div>
</template>

<script>
    import {VueMathjax} from 'vue-mathjax';
    import FormulaSymbolSmall from "../symbols/FormulaSymbolSmall.vue"
    import db from "../../../db/main.json";

    export default {
        name: 'FormulaStandaloneContainer',
        components: {
            "vue-mathjax": VueMathjax,
            FormulaSymbolSmall
        },
        data() {
            const formulaSymbols = this.getFormulaSymbols()

            const symbols = formulaSymbols.filter(x => x.formulas.find(y => y.name == this.formula.name))
            symbols.sort((a,b) => (a.symbol > b.symbol) ? 1 : ((b.symbol > a.symbol) ? -1 : 0))

            return {
                symbols,
                hidden: false,
                values: { }
            }
        },
        props: {
            formula: Object,
            filter: Array
        },
        methods: {
            getFormattedFormula(latexFormula) {
                const t = window.nerdamer.convertToLaTeX(latexFormula)
                return `\\(${t}\\)`;
            },
            valueChange(symbol, value) {
                this.symbols.find(x => x.symbol == symbol).value = value

                if (value == null)
                {
                    delete this.values[symbol]
                    return;
                }
                else
                {
                    this.values[symbol] = value
                }

                const unvalued = this.symbols.filter(x => x.value == null)

                if (unvalued.length != 1)
                {
                    return;
                }
                let vals = Object.assign({}, this.values);
                unvalued[0].value = window.nerdamer(this.formula.formula, vals).solveFor(unvalued[0].symbol).toString()
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

                for (const symbol of symbols)
                {
                    for (const formulaSymbol of db.symbols[symbol])
                    {
                        formulaSymbols.push({
                            symbol,
                            name: formulaSymbol.name,
                            description: formulaSymbol.description,
                            unit: formulaSymbol.unit,
                            formulas: formulaSymbol.formulas.map(x => this.getFormula(x)),
                            value: null
                        })
                    }
                }

                return formulaSymbols
            }
        },
        watch: {
            filter: {
                handler: function() {
                    const symbols = this.symbols.map(x => x.symbol)

                    this.hidden = !this.filter.every(x => symbols.includes(x) || x == "(any)")
                },
                deep: true
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
    .formula-container {
        background-color: var(--neutral);
        padding: 40px;
        margin: 10px 10% 10px 10%;
        border-radius: 20px;
    }

    h4 {
        font-size: 1.2rem;
        margin: 5px 0px 10px 0px;
    }
</style>