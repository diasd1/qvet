<template>
    <div class="formula" v-if="!hidden">
        <h2>{{symbol}}</h2><h4>({{name}})</h4><h5 v-if="unit">[{{unit}}]</h5>
        <details open>
            <summary>Formulas</summary>
            {{formulas}}
        </details>
        <details>
            <summary>Description</summary>
            {{description}}
        </details>
    </div>
</template>

<script>
    export default {
        name: 'Formula',
        props: {
            symbol: String,
            name: String,
            unit: String,
            description: String,
            formulas: Array[String],
            filter: String
        },
        data() {
            return {
                hidden: false
            }
        },
        methods: {
            getKeyWords() {
                const t = `${this.symbol ? this.symbol : ""} ${this.name ? this.name : ""} ${this.unit ? this.unit : ""}`.toLowerCase()
                return t;
            }
        },
        watch: {
            filter: function() {
                this.hidden = !this.getKeyWords().includes(this.filter.toLowerCase())
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/theme/dark.css';
    @import '../assets/css/applyTheme.css';

    pre {
        font-family: "Poppins";
    }

    .formula>h2, .formula>h4, .formula>h5 {
        display: inline-block;
        margin-right: 2vh;
        margin-top: 0;
    }

    h2 {
        font-size: 2rem;
    }

    h4 {
        font-size: 1.2rem;
    }

    .formula {
        background-color: var(--neutral);
        padding: 5vh;
        margin: 1vh;
        border-radius: 20px;
    }

    summary:hover {
        cursor: pointer;
    }
</style>