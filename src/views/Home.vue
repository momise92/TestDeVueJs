<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenue chez Moïse !!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import getAjax from "@/components/getAjax.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    getAjax
  }
};
</script>
