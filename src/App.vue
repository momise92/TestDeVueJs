<template>
  <div id="app">
    <MainNav></MainNav>
    <router-view/>
  </div>
</template>
<script>
import MainNav from "./views/MainNav.vue";
export default {
  components: {
    MainNav
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
error {
  color: #721c24 !important;
  background-color: #f8d7da !important;
  border-color: #f5c6cb !important;
}

.warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.success {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}
</style>
