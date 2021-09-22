<template>
    <div class="tag-collection">
        <Tag @delete="deleteTag(index)" v-for="(item, index) in items" :key="index" :text="item" />
    </div>
</template>

<script>
    import Tag from './Tag.vue'

    export default {
        name: 'TagCollection',
        data() {
            return {
                items: this.tags
            }
        },
        props: {
            tags: Array
        },
        components: {
            Tag
        },
        methods: {
            deleteTag(index) {
                this.items.splice(index, 1)
                this.$emit("filterUpdate", this.items)
            }
        }
    }
</script>

<style scoped>

.tag-collection {
    display: flex;
    flex-direction: row;
}

</style>