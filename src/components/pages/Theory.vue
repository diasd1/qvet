<template>
    <div class="layout">
        <Header />
        <div class="scrollablewrapper">
            <div class="body">
                <theory-entry v-for="(item, index) in contents" :key="index" :title="item.title" :content="item.content" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Footer from '../layout/Footer.vue'
    import Header from '../layout/Header.vue'
    import db from "../../../db/main.json";
    import TheoryEntry from '../TheoryEntry.vue';

    export default {
        name: 'NotFound',
        components: {
            Footer,
            Header,
                TheoryEntry
        },
        props: {
            msg: String
        },
        data() {
            return {
                contents: Object.keys(db.theory).map(x => {
                    return {
                        title: x,
                        content: db.theory[x]
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .body {
        flex: 90;
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    }

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