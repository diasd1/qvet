<template>
    <div class="body">
        <FormulaSymbol v-for="(formulaSymbol, index) in formulaSymbols" :key="index" :filter="filter" :symbol="formulaSymbol.symbol"
                       :name="formulaSymbol.name" :description="formulaSymbol.description" :unit="formulaSymbol.unit" :formulas="formulaSymbol.formulas" />
    </div>
</template>

<script>
    import FormulaSymbol from './FormulaSymbol.vue'
    import db from "../../db/main.json";

    export default {
        name: 'Body',
        props: {
            filter: Object
        },
        components: {
            FormulaSymbol
        },
        methods: {
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
                            formulas: formulaSymbol.formulas.map(x => this.getFormula(x))
                        })
                    }
                }

                formulaSymbols.sort((a,b) => (a.symbol > b.symbol) ? 1 : ((b.symbol > a.symbol) ? -1 : 0))

                return formulaSymbols
            }
        },
        data() {
            return {
                formulaSymbols: this.getFormulaSymbols()
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/theme/dark.css';
    @import '../assets/css/applyTheme.css';
</style>