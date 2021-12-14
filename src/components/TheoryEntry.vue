<template>
    <div class="theoryEntry">
        <h4>{{title}}</h4>
        <formula :formula="content" />
        <!--details>
            <summary>References</summary>
            <h3>URI</h3>
            <iframe src="/formulas#URI"/>
            <formula-container :formula="{ description: 'Spannung U durch Widerstand R und Strom I bestimmen', formula: 'U = R * I', name: 'URI'}" />
            <h3>L</h3>
            <iframe src="/#I"/>
            <formula-symbol-small name="Induktivität" symbol="L" unit="H"/>
        </details-->
    </div>
</template>

<script>
    import Formula from './formulas/Formula.vue'
    //import FormulaContainer from './formulas/FormulaContainer.vue'
    //import FormulaSymbolSmall from './symbols/FormulaSymbolSmall.vue'
    
    export default {
        components: {
            Formula,
                //FormulaSymbolSmall,
                //FormulaContainer
        },
        name: "TheoryEntry",
        props: {
            title: String,
            content: String
        }
    }
</script>

<style scoped>
    .theoryEntry {
        background-color: var(--neutral);
        padding: 40px;
        margin: 10px 10% 10px 10%;
        border-radius: 20px;
    }

    h4 {
        font-size: 1.2rem;
        margin: 5px 10px 0px 0px;
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

    iframe {
        width: 100%;
        height: 500px;
    }
</style>