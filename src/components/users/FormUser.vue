<template>
  <form id="form_user" @submit="handleSubmit">
    <h1 class="title">{{ title }}</h1>
    <div v-if="!user">Sorry we cannot find this user</div>
    <div v-else>
      {{user}}
      <p class="msg" :class="msgCls">{{msg}}</p>
      <label for="lastname" class="label">Lastname</label>
      <input type="text" id="lastname" class="input" v-model="user.lastname" required>
      <label for="name" class="label">Name</label>
      <input type="text" id="name" class="input" v-model="user.name" required>
      <button class="btn">Ok</button>
    </div>
  </form>
</template>

<script>
export default {
  computed: {
    user() {
      console.log(this.$route.params.id)
      return this.$route.params.id
        ? this.$store.getters["user"](this.$route.params.id)
        : {
            id: null,
            lastname: "",
            name: ""
          };
    }
  },
  data() {
    return {
      msg: "",
      msgCls: null
    };
  },
  methods: {
    displayMsg(msg, status) {
      if(!msg) return console.error("the msg is required");
      const possibleStatus = ["succes", "warning", "error"];
      if (possibleStatus.includes(status)) {
        this.msgCls = status;
        this.msg = msg;
      } else console.warning(`${status} is not a valid css class for msgs`);
    },
    createUser(){
        this.user.id = Date.now();
        this.$store.commit("addUser", this.user);
        this.displayMsg("Thank you for your add","succes");
    },
    updateUser(){
      this.$store.commit("updateUser", this.user)
      this.displayMsg("User has been updated", "succes");
    },
     handleSubmit(e) {
      e.preventDefault();
      if (!this.user.name || !this.user.lastname) {
        return this.displayMsg("Sorry, name And Lastname are required", warning);
        }
        if(this.$route.params.id) this.updateUser();
        else this.createUser();
      }
    },
  props: ["title"]
};
</script>
<style>
</style>
