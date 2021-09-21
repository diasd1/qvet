<template>
    <div class="filter">
        <div class="symbol">
            <autocomplete @submit="sumbitHandler" :search="search" placeholder="Formelzeichen" />
        </div>
        <TagCollection :tags="tags"/>
    </div>
</template>

<script>
    //import Searchbox from './Searchbox/Searchbox.vue'
    import Autocomplete from '@trevoreyre/autocomplete-vue'
    import TagCollection from './TagCollection.vue'

    export default {
        name: 'Searcher',
        data() {
            return {
                tags: []
            }
        },
        props: {
            symbols: Array
        },
        components: {
            Autocomplete, TagCollection
        },
        methods: {
            onInputChange: function(filter) {
                this.$emit("onInputChange", filter)
            },
            search: function(input) {
                return this.symbols.filter(x => x.toLowerCase().includes(input.toLowerCase()))
            },
            sumbitHandler: function(input) {
                this.tags.push(input)
                this.onInputChange(input)
            }
        }
    }
</script>

<style src="@trevoreyre/autocomplete-vue/dist/style.css"></style>

<style>

.filter {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.symbol {
    width: 200px;
    margin: 40px;
}

input {
    font-family: "Poppins" !important;
}

.autocomplete-input, .autocomplete-result-list {
    background-color: var(--background) !important;
    border-color: var(--neutral) !important;
    color: var(--red) !important;
}

.autocomplete-result:hover {
    background-color: var(--neutral) !important;
    cursor: pointer;
    font-weight: bolder;
}

</style>