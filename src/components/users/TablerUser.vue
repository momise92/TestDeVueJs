<template>
<div>
  <h1 class="title">{{ title }}</h1>
  <table class="tabler">
    <thead v-if="users.length">
      <tr>
        <th v-for="(value,key) in users[0]" :key="key">{{key}}</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!users.length">
        <td>no user yet</td>
      </tr>
      <tr v-else v-for="(user, n) in users" :key="user.id+n">
        <td v-for="(value, prop) in user" :key="prop">{{value}}</td>
        <td>
          <router-link tag="button" :to="'update-user/' + user.id">edit</router-link>
        </td>
        <td>
          <button @click="$store.commit('deteteUser',user.id)">X</button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters["users"];
    }
  },
  props: ["title"]
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 80%;
}
th,
td {
  padding: 5px;
  text-align: center;
}

table,
th,
td {
  border: 1px solid black;
}
</style>
