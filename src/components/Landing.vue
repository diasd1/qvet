<template>
    <div class="layout">
        <Header />
        <Searcher @onInputChange="onInputChange" />
        <Body :filter="filter" />
        <Footer />
    </div>
</template>

<script>
    import Body from './Body.vue'
    import Footer from './Footer.vue'
    import Header from './Header.vue'
    import Searcher from './Searcher.vue'

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
            return {
                filter: ""
            }
        },
        methods: {
            onInputChange: function(filter) {
                this.filter = filter
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/theme/dark.css';
    @import '../assets/css/applyTheme.css';
    @import '../assets/css/layout.css';
</style>