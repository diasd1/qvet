<template>
    <div class="filter">
        <div class="symbol">
            <autocomplete @submit="sumbitHandler" :search="search" :placeholder="placeholder" />
        </div>
        <!--TagCollection @filterUpdate="onInputChange" :tags="tags"/-->
    </div>
</template>

<script>
    //import Searchbox from './Searchbox/Searchbox.vue'
    import Autocomplete from '@trevoreyre/autocomplete-vue'
    //import TagCollection from './TagCollection.vue'

    export default {
        name: 'Searcher',
        data() {
            return {
                tags: this.multiselect ? [] : ""
            }
        },
        props: {
            symbols: Array,
            placeholder: String,
            id: String,
            multiselect: { type: Boolean, default: false }
        },
        components: {
            Autocomplete,
            //TagCollection
        },
        methods: {
            onInputChange: function(filter) {
                this.$emit("onInputChange", filter, this.id)
            },
            search: function(input) {
                return this.symbols.filter(x => x.toLowerCase().includes(input.toLowerCase()))
            },
            sumbitHandler: function(input) {
                input = input ? input : ""
                this.multiselect ? this.tags.push(input) : this.tags = input
                this.onInputChange(this.tags)
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
    margin: 0px 10px 10px 0px;
    max-width: 200px;
}

.symbol {
    width: 200px;
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