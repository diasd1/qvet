<template>
    <div class="layout">
        <Header @switchExpand="switchExpandHeader" />
        <div v-if="!hideHeading" class="searchers">
            <Searcher :symbols="symbols" @onInputChange="onInputChange" id="symbol" placeholder="Formelzeichen" />
            <Searcher :symbols="names" @onInputChange="onInputChange" id="name" placeholder="Name" />
            <Searcher :symbols="units" @onInputChange="onInputChange" id="unit" placeholder="Einheit" />
        </div>
        <div class="scrollablewrapper">
            <Body :filter="filter" />
            <Footer />
        </div>
    </div>
</template>

<script>
    import Body from '../layout/Body.vue'
    import Footer from '../layout/Footer.vue'
    import Header from '../layout/Header.vue'
    import Searcher from '../search/Searcher.vue'
    import db from "../../../db/main.json";

    import Vue from 'vue'

    export default {
        name: 'Landing',
        props: {
            msg: String
        },
        components: {
            Body,
            Footer,
            Header,
            Searcher
        },
        data() {
            const symbols = Object.keys(db.symbols).sort()
            let names = [].concat.apply([], Object.keys(db.symbols).map(x => db.symbols[x])).map(x => x.name).sort()
            let units = [].concat.apply([], Object.keys(db.symbols).map(x => db.symbols[x])).map(x => x.unit || "None").sort()
            const filter = { };

            // filter uniques
            names = Array.from(new Set(names.map(c => c)));
            units = Array.from(new Set(units.map(c => c)));

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
            onInputChange(filter, type) {
                Vue.set(this.filter, type, typeof filter == "string" ? filter : filter[0])
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