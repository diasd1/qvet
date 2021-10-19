<template>
    <span ref="element" v-html="formula"/>
</template>
<script>

export default {
    name: "Formula",
    props: {
        formula: String
    },
    watch: {
        formula() {
            window.renderMath = window.MathJax.typesetPromise
            setTimeout(() => window.MathJax.typesetPromise([this.$refs.element]), 10)
        }
    }
}
</script>
