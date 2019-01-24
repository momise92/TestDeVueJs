<template>
  <div class="ViewModel">
    <p>
      simplantes :
      <a href="https://simplantes.cfapps.io/" target="_blank" rel="noopener">Simplantes</a>.
    </p>
    <p>{{msg}}</p>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "yo mama !"
    };
  }
};
</script>

<style>
</style>
