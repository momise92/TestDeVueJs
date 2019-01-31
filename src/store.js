import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        name: "foo",
        lastname: "bill"
      },
      {
        id: 2,
        name: "bar",
        lastname: "jill"
      },
      {
        id: 3,
        name: "toto",
        lastname: "kill"
      },
      {
        id: 4,
        name: "baz",
        lastname: "will"
      }
    ]
  },
  getters: {
    users(state) {
      return state.users;
    },
    user(state) {
      return id => state.users.find(user => user.id === Number(id));
      // return id => {
      // console.log(state, id);
      // return state.users.find(user => {
      //   return user.id === Number(id);
      // });
      // };
    }
  },
  mutations: {
    // Changer le store de manière synchrone
    addUser(state, user) {
      state.users.push(user);
    },
    updateUser(state, user) {
      // user vient du v-model du formulaire !
      const index = state.users.findIndex(u => u.id === Number(user.id));
      // vue set permet de remplacer des valeurs d'objets strcturés
      Vue.set(state.users, index, user);
      // in french = prend state.users et remplace l'objet contenu à l'indice (index) index par l'objet mis à jour (user)
    },
    deteteUser({ users }, id) {
      // trouver la position (index) de l'user a delete
      const index = users.findIndex(user => user.id === Number(id));
      //puis supprimer 1 case du tableau d'user en partant d'index
      users.splice(index, 1);
    }
  },
  actions: {
    // changer le store de manière asynchrone
  }
});
