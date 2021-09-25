<template>
  <div class="layout">
    <Header />
    <div class="body">
      <h1>:( 404</h1>
      This page does not exist (anymore)
      <a href="/">Go Back</a>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../layout/Footer.vue'
import Header from '../layout/Header.vue'

console.log(window.location.pathname)

export default {
  name: 'NotFound',
  components: {
    Footer, Header
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
    @import '../../assets/css/theme/dark.css';
    @import '../../assets/css/applyTheme.css';
    @import '../../assets/css/layout.css';
    @import '../../assets/css/hyperlinks.css';

    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .scrollablewrapper {
        overflow-x: hidden;
        overflow-y: auto;
        flex: 95;
        display: flex;
        flex-direction: column;
    }

    .searchers {
        display: flex;
        flex-direction: row;
        margin: 0px 10% 0px 10%;
        align-items: flex-start;
        flex-wrap: wrap;
    }
</style>
