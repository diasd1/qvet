<template>
    <div class="theoryEntry">
        <h4>{{title}}</h4>
        <formula :formula="content" />
    </div>
</template>

<script>
    import Formula from './formulas/Formula.vue'
    export default {
        components: {
            Formula
        },
        name: "TheoryEntry",
        props: {
            title: String,
            content: String
        }
    }
</script>

<style scoped>
    .theoryEntry {
        background-color: var(--neutral);
        padding: 40px;
        margin: 10px 10% 10px 10%;
        border-radius: 20px;
    }

    h4 {
        font-size: 1.2rem;
        margin: 5px 10px 0px 0px;
    }
</style>