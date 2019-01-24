<template>
  <div class="ViewModel">
    <p>
      Pour les Simplantes =>
      <a
        href="https://simplantes.cfapps.io/"
        target="_blank"
        rel="noopener"
      >Simplantes</a>.
    </p>
    <p>Vous avez écrit :{{msg}}</p>
    <label for="msg">Veuillez écrire quelque chose</label>
    <br>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World !"
    };
  }
};
</script>

<style lang="scss" scoped>
.ViewModel {
  display: block;
  border: 1px solid rgb(3, 98, 207);
}
</style>
