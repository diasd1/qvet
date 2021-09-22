<template>
    <div class="tag">
        <div class="text">{{text}}</div>
        <div @click="onDelete" class="delete">✕</div>
    </div>
</template>

<script>
    export default {
        name: 'Tag',
        props: {
            text: String
        },
        methods: {
            onDelete() {
                this.$emit("delete")
            }
        }
    }
</script>

<style scoped>
    .tag {
        background-color: var(--neutral);
        display: flex;
        border-radius: 10px;
        flex-direction: row;
        padding: 5px;
        margin: 10px;
    }

    .tag>.text {
        flex-grow: 1;
    }

    .tag>.delete:hover {
        cursor: pointer;
    }

    .tag>.delete {
        flex-flow: 0;
        margin-left: 10px;
    }
</style>