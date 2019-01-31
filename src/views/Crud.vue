<template>
  <div class="pageCrud">
    <h1 class="title">C.R.U.D</h1>
    <button @click="isIntrovisible = !isIntrovisible">View intro</button>
    <p v-if="isIntrovisible" class="intro">
      Une application simple de type crud comprend à minima,
      pour une entité de BDD un widget pour créer/updater une instance de l'entité.
      Un tableur pour lister chaque instance. Et enfin d'un widget d'action pour supprimer
      une (ou plusieurs) instance(s).
      <br>Avec VueJs, nous allons factoriser le widget CREATE/UPDATE. Utiliser des routes imbriquées pour Update.
    </p>
    <nav id="nav-crud" class="nav">
      <ul class="listRoute">
        <router-link :to="{name:'view-users'}" tag="li">View User </router-link> |
        <router-link :to="{name:'createUser'}" tag="li"> Create User</router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isIntrovisible: true
    };
  }
};
</script>

<style lang="scss">
.listRoute{
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 30px;
  cursor: pointer;
  li {
    margin: 0px 5px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #b8c229;
    }
  }
}
</style>
