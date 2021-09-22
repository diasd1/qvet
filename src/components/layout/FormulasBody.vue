<template>
    <div class="body">
        <FormulaStandaloneContainer v-for="(formula, index) in db.formulas" :key="index" :filter="filter.symbol" :formula="formula" />
    </div>
</template>

<script>
    import FormulaStandaloneContainer from '../formulas/FormulaStandaloneContainer.vue'
    import db from "../../../db/main.json";

    export default {
        name: 'Body',
        props: {
            filter: Object
        },
        components: {
            FormulaStandaloneContainer
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
                formulaSymbols: this.getFormulaSymbols(),
                db
            }
        }
    }
</script>
