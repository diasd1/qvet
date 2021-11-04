<template>
    <div class="formula-container">
        <div class="formula-main">
            <a class="flexa" target="_blank" :href="`/formulas#${formula.name}`">
                <h4>{{formula.name}}</h4>
            </a>
            <formula :formula="convertedFormula" />
            <br><br>
            <toggle-switch :group="String(Date.now())" @change="convert = $event.value == 'Converted'" :options="myOptions" :isActive="convert" />
        </div>
        <div class="formula-symbols">
            <FormulaSymbolSmall v-for="(symbol, index) in symbols" :key="index" :symbol="symbol.symbol"
                :name="symbol.name" :unit="symbol.unit" />
        </div>
    </div>
</template>

<script>
    import Formula from "@/components/formulas/Formula.vue"
    import FormulaSymbolSmall from "../symbols/FormulaSymbolSmall.vue"
    import db from "../../../db/main.json";
    import ToggleSwitch from 'vuejs-toggle-switch'

    export default {
        name: 'FormulaContainer',
        components: {
            Formula,
            FormulaSymbolSmall,
            ToggleSwitch
        },
        data() {
            const formulaSymbols = this.getFormulaSymbols()

            const symbols = formulaSymbols.filter(x => x.formulas.find(y => y.name == this.formula.name))
            symbols.sort((a, b) => (a.symbol > b.symbol) ? 1 : ((b.symbol > a.symbol) ? -1 : 0))

            return {
                symbols,
                convert: false,
                convertedFormula: this.getFormattedFormula(this.formula.formula),
                myOptions: {
                    layout: {
                        color: 'var(--text)',
                        backgroundColor: 'var(--neutral)',
                        selectedColor: 'white',
                        selectedBackgroundColor: 'green',
                        borderColor: 'black',
                        fontFamily: 'Poppins',
                        fontWeight: 'normal',
                        fontWeightSelected: 'bold',
                        squareCorners: false,
                        noBorder: false
                    },
                    size: {
                        fontSize: "1",
                        height: "2.5",
                        width: "15",
                    },
                    items: {
                        preSelected: 'Default',
                        disabled: false,
                        labels: [
                        {name: 'Default', color: 'var(--background)', backgroundColor: 'var(--text)'},
                        {name: 'Converted', color: 'var(--background)', backgroundColor: 'var(--text)'},
                        ]
                    }
                }
            }
        },
        props: {
            formula: Object,
            solveFor: String
        },
        watch: {
            convert() {
                this.convertedFormula = this.getConvertedFormula(this.formula.formula)
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
            getConvertedFormula(latexFormula) {
                if (!this.convert)
                {
                    return this.getFormattedFormula(latexFormula)
                }

                let convertedFormula = window.nerdamer.solve(latexFormula, this.solveFor).toString()
                convertedFormula = convertedFormula.slice(1, convertedFormula.length - 1)
                const t = window.nerdamer(`${this.solveFor} = ${convertedFormula}`).toTeX()
                return `\\(${t}\\)`;
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

    @media only screen
    and (max-device-width : 700px)
    {
        .formula-container {
            padding: 5px;
            margin: 10px 0 10px 0 !important;
            border-radius: 5px;
        }
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

    .toggle-switch {
        font-size: 5px !important;
        width: 5px;
        height: 5px;
    }
</style>