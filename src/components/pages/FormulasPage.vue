<template>
    <div class="layout">
        <Header @switchExpand="switchExpandHeader" />
        <div v-if="!hideHeading" class="searchers">
            <Searcher :symbols="symbols" @onInputChange="onInputChange" id="symbol" placeholder="Formelzeichen"
                :multiselect="true" />
        </div>
        <div class="scrollablewrapper">
            <FormulasBody :filter="filter" />
            <Footer />
        </div>
    </div>
</template>

<script>
    import FormulasBody from '../layout/FormulasBody.vue'
    import Footer from '../layout/Footer.vue'
    import Header from '../layout/Header.vue'
    import Searcher from '../search/Searcher.vue'
    import db from "../../../db/main.json";

    import Vue from "vue";

    export default {
        name: 'FormulasPage',
        components: {
            Footer,
            Header,
            FormulasBody,
            Searcher
        },
        props: {
            msg: String
        },
        data() {
            const symbols = Object.keys(db.symbols).sort()
            const names = [].concat.apply([], Object.keys(db.symbols).map(x => db.symbols[x])).map(x => x.name).sort()
            const units = [].concat.apply([], Object.keys(db.symbols).map(x => db.symbols[x])).map(x => x.unit || "None").sort()
            const filter = {};

            names.splice(0, 0, "(any)");
            units.splice(0, 0, "(any)");
            symbols.splice(0, 0, "(any)");

            return {
                filter,
                symbols,
                names,
                units,
                hideHeading: false
            }
        },
        methods: {
            switchExpandHeader(expanded) {
                this.hideHeading = !expanded
            },
            onInputChange: function(filter, type) {
                Vue.set(this.filter, type, typeof filter == "string" ? filter : filter)
            }
        }
    }
</script>

<style scoped>
    .scrollablewrapper {
        overflow-x: hidden;
        overflow-y: auto;
        flex: 95;
        display: flex;
        flex-direction: column;
    }

    .searchers {
        display: flex;
        flex-direction: row;
        margin: 0px 10% 0px 10%;
        align-items: flex-start;
        flex-wrap: wrap;
    }
</style>