<template>

  <div class="header-wrapper">
    <div class="header">
      <h1 class="title">QV / ET</h1>
    </div>
    <div class="expand"><a @click="switchExpand">{{expanded ? "-" : "+"}}</a></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      expanded: true
    }
  },
  methods: {
    switchExpand()
    {
      this.expanded = !this.expanded;
      this.$emit("switchExpand", this.expanded)
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 0;
}

.expand {
  display: flex;
  justify-content: end;
  padding-right: 10px;
}

a {
  margin: 0;
  padding: 0;
  cursor: pointer;
}
</style>
