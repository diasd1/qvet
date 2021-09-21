<template>
    <div class="body">
        <FormulaSymbol :filter="filter" symbol="Q" name="Güte" description="Güte eines Schwingkreises" :formulas='["$$Q = {fr \\over B}$$"]' />
        <FormulaSymbol :filter="filter" symbol="U" name="Spannung" description="Spannung halt" unit="V" :formulas='["$$U = {R * I}$$", "$$U = {P \\over I}$$"]' />
        <FormulaSymbol :filter="filter" symbol="I" name="Strom" description="Strom halt" unit="A" :formulas="['$$I = {U \\over R}$$', '$$I = {P \\over U}.$$']" />
    </div>
</template>

<script>
    import FormulaSymbol from './FormulaSymbol.vue'

    export default {
        name: 'Body',
        props: {
            filter: String
        },
        components: {
            FormulaSymbol
        }
    }
</script>

<style scoped>
    @import '../assets/css/theme/dark.css';
    @import '../assets/css/applyTheme.css';
</style>