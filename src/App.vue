
<script>
    import Landing from './components/Landing.vue'
    import FormulasPage from './components/FormulasPage.vue'
    import NotFound from './components/NotFound.vue'

    const routes = {
        '/': Landing,
        '/formulas': FormulasPage,
        '/hello-world': NotFound
    }

    export default {
        name: 'App',
        components: {
            Landing, NotFound, FormulasPage
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
        render(h) { return h(this.ViewComponent) }
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