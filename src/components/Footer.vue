<template>
  <div class="footer">
    <div class="navbar">
      <p><a id="symbols" href="/">Main (Symbols)</a></p>
      <p><a id="formulas" href="/formulas">Formulas</a></p>
    </div>
    <p id="madeBy">Made by <a href="https://github.com/dxstiny">dxstiny</a></p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@import '../assets/css/theme/dark.css';
@import '../assets/css/applyTheme.css';
@import '../assets/css/hyperlinks.css';

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
