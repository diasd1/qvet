<template>
    <input type="text" @input="onInput" class="searchbox" v-model="filter">
</template>

<script>
    export default {
        name: 'Searchbox',
        methods: {
            onInput: function() {
                this.$emit("onInputChange", this.filter)
            }
        },
        data() {
            return {
                filter: ""
            }
        }
    }
</script>

<style scoped>
    .searchbox {
        max-height: 4vh;
        font-size: 1.7rem;
        background-color: var(--background);
        color: var(--text);
        border: 2px solid var(--neutral);
        border-radius: 10px;
        font-family: "Poppins";
        margin: 1vh;

    }

    .searchbox:focus {
        outline: none
    }
</style>