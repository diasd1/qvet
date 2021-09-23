<script>
    import Landing from './components/pages/Landing.vue'
    import FormulasPage from './components/pages/FormulasPage.vue'
    import NotFound from './components/pages/NotFound.vue'
    import Vue from 'vue';
    import VueMeta from 'vue-meta';
    Vue.use(VueMeta)

    const routes = {
        '/': Landing,
        '/formulas': FormulasPage
    }

    export default {
        name: 'App',
        components: {
            Landing,
            NotFound,
            FormulasPage
        },
        data() {
            return {
                currentRoute: window.location.pathname
            }
        },
        computed: {
            ViewComponent() {
                return routes[this.currentRoute] || NotFound
            }
        },
        render(h) {
            return h(this.ViewComponent)
        },
        metaInfo() {
            return {
                title: "QV / ET",
                meta: [{
                        name: 'description',
                        content: 'QV / ET is a search engine, specifically designed to help students with their electronics engineer QV'
                    },
                    {
                        property: 'og:title',
                        content: "QV / ET - The Search Engine"
                    },
                    {
                        property: 'og:site_name',
                        content: 'QV / ET'
                    },
                    {
                        property: 'og:type',
                        content: 'website'
                    },
                    {
                        name: 'robots',
                        content: 'index'
                    }
                ]
            }
        }
    }
</script>

<style src="./assets/fonts/Poppins/fontface.css"></style>

<style>
    .hidden {
        display: none !important;
    }

    html {
        font-family: "Poppins";
    }

    /* width */
    ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
        padding: 0;
        margin: 0;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 3px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--neutral);
        border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--info);
    }
</style>