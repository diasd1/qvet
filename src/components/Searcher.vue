<template>
    <div class="filter">
        <Searchbox @onInputChange="onInputChange" />
    </div>
</template>

<script>
    import Searchbox from './Searchbox/Searchbox.vue'

    export default {
        name: 'Searcher',
        components: {
            Searchbox
        },
        methods: {
            onInputChange: function(filter) {
                this.$emit("onInputChange", filter)
            }
        }
    }
</script>
