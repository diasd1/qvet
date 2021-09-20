<template>
    <div class="body">
        <Formula :filter="filter" symbol="Q" name="Güte" description="Güte eines Schwingkreises" formulas=[1,2,3] />
        <Formula :filter="filter" symbol="U" name="Spannung" description="Spannung hahahah" unit="V" formulas=[1,2,3] />
        <Formula :filter="filter" symbol="I" name="Strom" description="Strom hahahah" unit="A" formulas=[1,2,3] />
    </div>
</template>

<script>
    import Formula from './Formula.vue'

    export default {
        name: 'Body',
        props: {
            filter: String
        },
        components: {
            Formula
        }
    }
</script>

<style scoped>
    @import '../assets/css/theme/dark.css';
    @import '../assets/css/applyTheme.css';
</style>