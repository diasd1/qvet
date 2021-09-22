<template>
  <div class="footer">
    <div class="navbar">
      <p><a id="symbols" href="/">Main (Symbols)</a></p>
      <p><a id="formulas" href="/formulas">Formulas</a></p>
    </div>
    <p id="madeBy">{{year}}, Made with ❤️ by <a href="https://github.com/dxstiny">dxstiny</a> ({{version}})</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      version: require('/package.json').version || "0.9.0"
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20px;
}

p {
  font-size: 0.8rem;
  margin-right: 20px;
}

.navbar>p {
  margin-left: 0px;
  margin-right: 0px;
}
</style>
