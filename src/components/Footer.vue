<template>
  <div class="footer">
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

#madeBy {
  font-size: 0.7rem;
  margin-right: 40px;
}

a, a:visited {
  color: var(--info);
}

a:hover {
  color: var(--success);
}
</style>
