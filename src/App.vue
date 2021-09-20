<template>
    <div id="app">
        <Landing msg="Welcome to Your Vue.js" />
    </div>
</template>

<script>
    import Landing from './components/Landing.vue'

    export default {
        name: 'App',
        components: {
            Landing
        }
    }
</script>

<style>
    @font-face {
        font-family: "Poppins";
        src: local("Poppins"),
            url(./assets/fonts/Poppins/Poppins-Light.ttf) format("truetype");
    }

    #app {
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